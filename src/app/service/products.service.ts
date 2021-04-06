import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Products } from '../model/products';
import { Result } from '../model/result';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Products[] = [];
  productSubject = new Subject<Products[]>();
  pages = [];
  limit:number = 9;
  numberTotalOfPage:number;


  constructor(private http: HttpClient) {
    this.getProductFromServer();
  }


  /**
   * Emission des données après recuperation de l'observable
  */
  emitProduct() {
    this.productSubject.next(this.products);
  }

  /**
   * Methode qui recupere les données depuis le serveur
   * @author Farouk
  */
  getProductFromServer() {
    const url = `${environment.API + 'products?' + environment.API_KEY}`;
    this.http.get(url).subscribe((dataProduct: Result) => {
      if (dataProduct.status == 200) {
        this.products = dataProduct.result;
        //On compte le nombre de page
        this.numberTotalOfPage = this.products.length/this.limit; //Nombre total de page
        for(let i=0; i< this.numberTotalOfPage; i++){
          this.pages.push(i);
        }
        console.log('donnes service:', dataProduct);
        this.emitProduct();
      } else {
        console.log('Erreur:', dataProduct.message);
      }
    });
  }

  /**
   * Cette méthode traite l'affichage d'un produit
   * @param int id
   * @author Farouk
  */
  getProductById(id: number) {
    const product = this.products.find(element => element.idProduct == id);
    if(product){
      return product;
    }else{
      return null;
    }
  }


  /**
   * Methode qui retourne les produits en fonction de la page
  */
 getProductByPage(numberPage:number):Products[]{

  if(numberPage>0 || numberPage < this.numberTotalOfPage){
    const prodResult = this.products.slice(numberPage*this.limit, (numberPage+1)*this.limit );
    return prodResult;
  }else{
    return null;
  }

 }

}
