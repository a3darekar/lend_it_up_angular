import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

const routes: Routes = [
  { path:'products', component:ProductComponent},
  { path:'productList', component:ProductListComponent},
  { path:'productList/:pk', component:ProductDetailComponent},
  { path:'productDetails', component:ProductDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
