import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../observables/productList.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  BASE_URL = 'https://70e95ed1.ngrok.io/';
  constructor(private http: HttpClient) { }

  createRequest(product) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'token ' + localStorage.getItem('key')
    });

    return this.http.post<any>(this.BASE_URL + 'api/requests/', product, {headers: header});
  }

  getRequest(){
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'token ' + localStorage.getItem('key')
    });

    return this.http.get(this.BASE_URL + 'api/requests/', {headers: header});
  }
}
