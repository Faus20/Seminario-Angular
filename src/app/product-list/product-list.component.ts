import { Component, OnInit } from '@angular/core';
import { empty, Observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';
import { Product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  //definimos un arreglo donde vamos almacenar muchos productos con el tipo product.
  products: Product[] = [];
  cartList$: Observable<Product[]>;  

  constructor(
    private cart: ProductCartService,
    private productDataService: ProductDataService) {

  }

  ngOnInit(): void {
    this.productDataService.getAll()
      .subscribe(products => this.products = products);
  }


  addToCart(product: Product) {
    this.cart.addToCart(product);
    this.cart.priceCart();
    product.stock -= product.quantity;
    product.quantity = 0;
  }
}
