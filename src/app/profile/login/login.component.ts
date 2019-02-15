import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../observables/user';
import { LoginService } from '../services/login.service';
import { Sessionmanager } from '../../utils/sessionmanager';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  key;
  user = new User();
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private loginService: LoginService,
              private registerService: RegisterService) { }

  ngOnInit() {
  }

  onRegister() {
    this.router.navigate(['/register'], {relativeTo: this.activatedRoute})
  }

  onLogin() {
    console.log('user', this.user);
    this.loginService.login(this.user).subscribe(
      data => this.createSesstion(data.key),
      error => console.log('data', error)
    );
  }

  createSesstion(key: string){
    var sessionManager = new Sessionmanager();
    this.registerService.getUser(key).subscribe(
      data => this.redirectToProfile(data.username, key, data.pk),
      error => console.log('error', error)
    );
    sessionManager.createLoginSession(key, this.user.username, this.router, this.activatedRoute);
  }

  redirectToProfile(username: string, key: string, pk: number){
    localStorage.setItem('key', key);
    localStorage.setItem('username', username);
    localStorage.setItem('userPk', pk.toString());
    this.router.navigate(['/category'], {relativeTo: this.activatedRoute});
  }

}
