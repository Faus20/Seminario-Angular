import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechgamingCartComponent } from './techgaming-cart/techgaming-cart.component';
import { TechgamingProductsComponent } from './techgaming-products/techgaming-products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: TechgamingProductsComponent
  },

  {
    path: 'cart',
    component: TechgamingCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
