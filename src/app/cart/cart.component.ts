import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product-list/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$: Observable<Product[]>;  
  priceCart$: Observable<number>;

  constructor(private cart: ProductCartService) { 
    this.cartList$ = cart.cartList.asObservable();
    this.priceCart$ = cart.getPriceCart()
  }

  ngOnInit(): void {
    
  }

  quitToCart(product: Product){
    this.cart.delete(product);
  }

}
