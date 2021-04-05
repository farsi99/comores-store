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

  constructor(private prodService:ProductsService) { }

  ngOnInit(): void {
    this.prodSub = this.prodService.productSubject
    .subscribe((data)=>{
      this.products = data;
    });
    //On emet les données
    this.prodService.emitProduct();
  }

  ngOnDestroy(){
    this.prodSub.unsubscribe();
  }

}
