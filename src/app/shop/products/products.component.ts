import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Products } from 'src/app/model/products';
import { ProductsService } from 'src/app/service/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnDestroy {

  products:Products[]=[];
  prodSub: Subscription;
  prefUrlImage=`${environment.prefUrlImage}`;
  currentPage:number =0;
  pages=[];

  constructor(private prodService:ProductsService) {
    this.pages = this.prodService.pages;
  }

  ngOnInit(): void {
    this.prodSub = this.prodService.productSubject
    .subscribe((data)=>{
     // this.products = data;
     this.products = this.prodService.getProductByPage(this.currentPage);
    });
    //On emet les données
    this.prodService.emitProduct();
  }

  //Au clique d'un numero de page
  changePage(numberPage:number):void{
    const prod = this.prodService.getProductByPage(numberPage);
    if(prod){
      this.products = prod;
      this.currentPage = numberPage;
    }
  }

  nextPage():void{
    const newCurrentPage = this.currentPage+1;
    const prod = this.prodService.getProductByPage(newCurrentPage);
    if(prod){
      this.products = prod;
      this.currentPage = newCurrentPage;

    }
  }

  prevPage():void{
    const newCurrentPage = this.currentPage-1;
    const prod = this.prodService.getProductByPage(newCurrentPage);
    if(prod){
      this.products = prod;
      this.currentPage = newCurrentPage;
    }
  }

  ngOnDestroy(){
    this.prodSub.unsubscribe();
  }

}
