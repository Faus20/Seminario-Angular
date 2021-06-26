import { isNgContent } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductDataService } from './product-data.service';
import { Product } from './product-list/product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  private _priceCart: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private _cartList: Product[] = [];
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject(this._cartList);

  constructor() { }
  

  //agrego un producto al carrito
  addToCart(product: Product){
    let item = this._cartList.find((v1) => v1.name == product.name);
    if (!item) {
      this._cartList.push({ ... product});
    } else {
      item.quantity += product.quantity;
    }
    this.cartList.next(this._cartList); //equivalente al emmit de eventos
  }

  //calculo el precio total del carrito
  priceCart() {
    let aux: number = 0; //variable auxiliar para calcular el precio de los productos
    this.cartList.forEach(element => {
      //recorro todos los elementos
      element.forEach(elem => {
        //de cada elemento de cartList le pido su precio
        aux += elem.price * elem.quantity;
      });
    });
    this._priceCart.next(aux); //una vez terminado actualizo el precio del carrito
  }
  
  //retorno el total del carrito
  getPriceCart(): BehaviorSubject<number> {
    return this._priceCart;
  }

  //borro un producto del carrito
  delete(product: Product){
    let item = this._cartList.find(v1 => v1.name == product.name);
    if (item) {  
      this._cartList.splice(this._cartList.indexOf(product), 1);
      this.priceCart();
    }
  }

}
