import { LoginService } from './login/login.service';
import {Injectable} from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private loginService : LoginService, private router:Router) {
  }

  canActivate(): boolean | UrlTree {

    return this.loginService.isUserLoggedIn()
          || this.router.parseUrl('login')
  }

}
