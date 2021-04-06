import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cart } from '../model/cart';
import { Category } from '../model/category';
import { CartService } from '../service/cart.service';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartData;
  cart:Cart[];
  categories:Category[];
  categorySub : Subscription;

  constructor(private cartService:CartService, private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.cartData = this.cartService.cartData;
    this.cart = this.cartService.cart;
    this.categorySub = this.categoryService.categorySubject.subscribe((data:Category[])=>{
      this.categories = data;
    });
    this.categoryService.emitCategories();
  }

}
