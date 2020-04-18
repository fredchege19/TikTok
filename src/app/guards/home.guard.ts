import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad, Route, UrlSegment,
  ActivatedRouteSnapshot, RouterStateSnapshot,
  UrlTree, 
  Router} from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { AuthConstants } from '../config/auth-constants';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor(public storageService: StorageService, private router: Router) {}
  canActivate(): Promise <boolean> {
    return new Promise( resolve => {
      
      this.storageService.get(AuthConstants.AUTH).then( res => {
        if (res) {
          resolve(true);
        } else {
          resolve(false);
          this.router.navigate(['']);
        }
      }).catch (err => {
        resolve(false);
      });
    });
  }

}
