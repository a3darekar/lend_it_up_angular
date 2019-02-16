import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../observables/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  BASE_URL = 'https://70e95ed1.ngrok.io/';
  constructor(private http: HttpClient) { }

  public login(user: User) {
    return this.http.post(this.BASE_URL + 'auth/login/', user);
  }
}
