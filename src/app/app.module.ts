import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TechgamingProductsComponent } from './techgaming-products/techgaming-products.component';
import { CartComponent } from './cart/cart.component';

import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';

import { TechgamingCartComponent } from './techgaming-cart/techgaming-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TechgamingCartComponent,
    TechgamingProductsComponent,
    CartComponent,
    InputIntegerComponent,
    TechgamingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
