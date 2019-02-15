import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../observables/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  BASE_URL = 'https://ce2b94d3.ngrok.io/';
  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]>{
    const header = new HttpHeaders({
      'Authorization': 'token ' + localStorage.getItem('key')
    });
    return this.http.get<Category[]>(this.BASE_URL + 'api/categories/', {headers: header});
  }
}
