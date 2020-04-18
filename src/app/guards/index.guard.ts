import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { AuthConstants } from '../config/auth-constants';

@Injectable({
  providedIn: 'root'
})
export class IndexGuard implements CanActivate {
  constructor(public storageService: StorageService, private router: Router) {}

  canActivate(): Promise <boolean> {
    return new Promise( resolve => {
      this.storageService.get(AuthConstants.AUTH).then( res => {
        if (res) {
          this.router.navigate(['home/feed']);
          resolve(false);
        } else {
          resolve(true);
        }
      }).catch (err => {
        resolve(false);
      });
    });
  }
}
