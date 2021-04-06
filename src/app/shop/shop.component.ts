import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Products } from '../model/products';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products:Products[];
  prodSub: Subscription;
  currentPage:number =0;

  constructor(private prodService:ProductsService) { }

  ngOnInit(): void {
    this.prodSub = this.prodService.productSubject
    .subscribe((data)=>{
     // this.products = data;
     this.products = this.prodService.getProductByPage(this.currentPage);
    });
    //On emet les données
    this.prodService.emitProduct();

  }

}
