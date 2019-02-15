import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../observables/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  BASE_URL = 'https://ce2b94d3.ngrok.io/';
  constructor(private http: HttpClient) { }

  public login(user: User) {
    return this.http.post<any>(this.BASE_URL + 'auth/login/', user);
  }
}
