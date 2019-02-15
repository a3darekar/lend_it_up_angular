import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { LoginComponent } from './profile/login/login.component';
import { RegisterComponent } from './profile/register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {path: '', component: CategoryComponent, pathMatch: 'full'},
  { path: 'products', component: ProductComponent},
  { path: 'products/:pk', component: ProductListComponent},
  { path: 'productDetail/:pk', component: ProductDetailComponent},
  { path: 'productDetails', component: ProductDetailComponent},
  {path: 'profile', component:  ProfileComponent},
  {path: 'login', component:  LoginComponent},
  {path: 'register', component:  RegisterComponent},
  { path: 'category', component:  CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,
                                  RegisterComponent,
                                  CategoryComponent,
                                  ProductComponent,
                                  ProductListComponent,
                                  ProductDetailComponent,
                                  ProfileComponent];
