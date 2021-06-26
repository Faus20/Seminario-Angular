import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product-list/product';
import { tap} from 'rxjs/operators';

const URL = "https://60ccd0f271b73400171f89db.mockapi.io/api/v1/products";

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  //consume la api y devuelve un observable a la respuesta
  public getAll(): Observable<Product[]>{


   return this.http.get<Product[]>(URL)
            .pipe(
              tap((products: Product[])=> products.forEach(product => product.quantity = 0))
            );
  }
}

