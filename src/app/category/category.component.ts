import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Products } from '../model/products';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit,OnDestroy {

 productSub:Subscription;
 products:Products[];

  constructor(private route:ActivatedRoute, private productService:ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((request)=>{
      console.log('id: ', request.id);
      this.productSub = this.productService.productSubject
      .subscribe((data:Products[])=>{
        const prod = data.filter( product =>{
          return product.Category == +request.id
        });
        console.log('Prod cat:', prod);
        this.products = prod;
      });
      this.productService.emitProduct();
    });
  }

ngOnDestroy():void{
  this.productSub.unsubscribe();
}

}
