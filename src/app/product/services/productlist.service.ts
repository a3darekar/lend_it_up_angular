import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../observables/productList.model';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  BASE_URL = 'https://ce2b94d3.ngrok.io/';
  constructor(private http: HttpClient) { }

  getProducts(categoryPk: number): Observable<Product[]> {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'token ' + localStorage.getItem('key')
    });
    return this.http.get<Product[]>(this.BASE_URL + 'api/products/?category=' + categoryPk, {headers: header});
  }
}
