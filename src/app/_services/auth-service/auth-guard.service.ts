import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    public authServiceService: AuthServiceService,
    public router: Router,
  ) {}

  canActivate(): boolean {
    const accessToken = this.authServiceService.accessToken;

    if (!accessToken) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
