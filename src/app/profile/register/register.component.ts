import { Component, OnInit } from '@angular/core';
import { User } from '../observables/user';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  key;
  user = new User();
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private registerService: RegisterService) { }

  ngOnInit() {
  }

  onLogin() {
    this.router.navigate(['/login'], {relativeTo: this.activatedRoute});
  }

  onRegister() {
    console.log(this.user);
    this.registerService.register(this.user).subscribe(
      data => this.getUser(data.key),
      error => console.log('error', error)
    );

  }

  getUser(key: string){
    console.log('user key', key);
    this.registerService.getUser(key).subscribe(
      data => this.redirectToProfile(data.username, key, data.pk),
      error => console.log('error', error)
    );
  }

  redirectToProfile(username: string, key: string, pk: number){
    localStorage.setItem('key', key);
    localStorage.setItem('username', username);
    localStorage.setItem('userPk', pk.toString());
    this.router.navigate(['/profile'], {relativeTo: this.activatedRoute});
  }

}
