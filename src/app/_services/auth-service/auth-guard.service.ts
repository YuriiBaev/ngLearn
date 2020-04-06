import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from './auth.service';
import { LOGIN_ROUTE } from '../../constants/routes';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    public authService: AuthService,
    public router: Router,
  ) {}

  canActivate(): boolean {
    const accessToken = this.authService.accessToken;

    if (!accessToken) {
      this.router.navigate([LOGIN_ROUTE]);
      return false;
    }
    return true;
  }
}
