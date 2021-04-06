import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartData;
  cart:Cart[];

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartData = this.cartService.cartData;
    this.cart = this.cartService.cart;
  }

}
