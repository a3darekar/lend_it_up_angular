import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../observables/user';
import { LoginService } from '../services/login.service';
import { Sessionmanager } from '../../utils/sessionmanager';

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
              private loginService: LoginService) { }

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
    sessionManager.createLoginSession(key, this.user.username, this.router, this.activatedRoute);
  }

}
