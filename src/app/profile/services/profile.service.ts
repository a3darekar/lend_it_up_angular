import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../observables/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  BASE_URL = 'https://70e95ed1.ngrok.io/';
  constructor(private http: HttpClient) { }

  getProfile(): Observable<User[]> {
    const header = new HttpHeaders({
      'Authorization': 'token ' + localStorage.getItem('key')
    });
    return this.http.get<User[]>(this.BASE_URL + 'profile/api/', {headers: header});
  }

  public updateProfile(user: FormData){
    const header = new HttpHeaders({
      'Authorization': 'token ' + localStorage.getItem('key')
    });
    return this.http.post(this.BASE_URL + 'profile/api/', user, {headers: header});
  }
}
