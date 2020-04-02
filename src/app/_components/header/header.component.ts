import { Component } from '@angular/core';
import {
  getLink,
  REGISTRATION,
  ADD_POST,
  PROFILE,
  MY_POSTS, LOGIN,
} from '../../constants/routes';
import { AuthService } from '@services/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  registrationLink = getLink(REGISTRATION);
  loginLink = getLink(LOGIN);
  myPosts = getLink(MY_POSTS);
  profile = getLink(PROFILE);
  createPost = getLink(ADD_POST);

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
