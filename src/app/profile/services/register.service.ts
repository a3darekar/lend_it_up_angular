import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../observables/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  BASE_URL = 'https://ce2b94d3.ngrok.io/';
  constructor(private http: HttpClient) { }

  public register(user: User) {
    return this.http.post<any>(this.BASE_URL + 'auth/register/', user);
  }

  public getUser(key: string){
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'token ' + key
    });
    return this.http.get(this.BASE_URL + 'auth/user/', {headers: header});
  }
}
