import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@services/auth-service/auth.service';

import * as routes from '../../constants/routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  registrationLink = routes.getLink(routes.REGISTRATION_ROUTE);
  loginLink = routes.getLink(routes.LOGIN_ROUTE);
  myPosts = routes.getLink(routes.MY_POSTS);
  profile = routes.getLink(routes.PROFILE);
  createPost = routes.getLink(routes.ADD_POST);

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  get isLoginPage() {
    return this.router.url === this.loginLink;
  }

  get isAuthorized() {
    return this.authService.accessToken;
  }
}
