import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../observables/productList.model';

@Injectable({
  providedIn: 'root'
})
export class ProductuploadService {

  BASE_URL = 'https://70e95ed1.ngrok.io/';
  constructor(private http: HttpClient) { }

  uploadProduct(product: FormData) {
    const header = new HttpHeaders({
      'Authorization': 'token ' + localStorage.getItem('key')
    });

    return this.http.post(this.BASE_URL + 'api/products/', product, {headers: header});
  }
}
