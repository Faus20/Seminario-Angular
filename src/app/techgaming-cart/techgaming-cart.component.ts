import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product-list/product';

@Component({
  selector: 'app-techgaming-cart',
  templateUrl: './techgaming-cart.component.html',
  styleUrls: ['./techgaming-cart.component.scss']
})
export class TechgamingCartComponent implements OnInit {
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
    product.stock += product.quantity;
  }
}
