import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AnchorURLs } from 'src/routes/ng.routes';
import { LocalStorage } from 'src/storage/local.storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (LocalStorage.Token && !LocalStorage.Is_Token_Expired)
      return true

    LocalStorage.removeAll()
    this.router.navigateByUrl(AnchorURLs.account.login)
    return false
  }

}
