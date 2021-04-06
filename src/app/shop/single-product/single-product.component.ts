import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Products } from 'src/app/model/products';
import { CartService } from 'src/app/service/cart.service';
import { ProductsService } from 'src/app/service/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  product:Products;
  prefUrlImage = `${environment.prefUrlImage}`;
  producSub : Subscription;


  constructor(private route:ActivatedRoute, private prodService:ProductsService, private cartservice:CartService) { }

  ngOnInit(): void {
    window.scrollTo(0,0); // permet de rentrer sur la page vers le haut
    const id = +this.route.snapshot.params['id'];
    this.producSub = this.prodService.productSubject.subscribe(
      (data:Products[])=>{
        this.product = this.prodService.getProductById(id);
        console.log('prod:', this.product);
      });
      this.prodService.emitProduct();
  }

  addCart(product):void{
    this.cartservice.addProductToCard(product);
  }


}
