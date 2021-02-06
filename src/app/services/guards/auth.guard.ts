import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {SigninService} from '../../authentication/signin/signin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private signinginService: SigninService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const role = route.data.role;
    if (this.signinginService.isAuthenticated() === false){
      this.router.navigateByUrl('/signin');
      return false;
    }
    if (!role && this.signinginService.isAuthenticated()){
      return true;
    }
    if (role && this.signinginService.isAuthenticated()){
      if (role === this.signinginService.getUserRole()){
        return true;
      }
    }
    this.router.navigateByUrl('/signin');
    return false;
  }
}
