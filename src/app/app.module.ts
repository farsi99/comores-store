import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPayPalModule } from 'ngx-paypal';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ShopComponent } from './shop/shop.component';
import { ProductsComponent } from './shop/products/products.component';
import { SingleProductComponent } from './shop/single-product/single-product.component';
import { CartComponent } from './shop/cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ModalAddCartComponent } from './shop/modal-add-cart/modal-add-cart.component';
import { ModalQuickViewComponent } from './shop/modal-quick-view/modal-quick-view.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { AuthGuard } from './service/auth.guard';
import { ButtonPaypalComponent } from './shop/button-paypal/button-paypal.component';

export const routes:Routes=[
  {path:'home', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'shop', component:ShopComponent},
  {path:'cart', component:CartComponent},
  {path:'single-product/:id', component:SingleProductComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'checkout', canActivate:[AuthGuard], component:CheckoutComponent},
  {path:'category/:id', component:CategoryComponent},
  {path:'NotFound', component:NotFoundComponent},
  {path:'products', component:ProductsComponent},
  {path:'', component:ShopComponent},
  {path:'**', redirectTo:'NotFound', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ShopComponent,
    ProductsComponent,
    SingleProductComponent,
    CartComponent,
    NotFoundComponent,
    CategoryComponent,
    ModalAddCartComponent,
    ModalQuickViewComponent,
    CheckoutComponent,
    ButtonPaypalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    NgxPayPalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
