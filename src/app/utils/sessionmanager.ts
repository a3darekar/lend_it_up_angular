import { Router, ActivatedRoute } from '@angular/router';

export class Sessionmanager {
  public createLoginSession(key: string, username: string,router: Router, activatedRoute: ActivatedRoute) {
    localStorage.setItem('key', key);
    localStorage.setItem('username', username);
  }

  public destroySession(router: Router, activatedRoute: ActivatedRoute){
    localStorage.removeItem('key');
    localStorage.removeItem('username');
    router.navigate(['/login'], {relativeTo: activatedRoute});
  }
}
