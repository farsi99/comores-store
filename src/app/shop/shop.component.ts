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

  constructor(private prodService:ProductsService) { }

  ngOnInit(): void {

  }

}
