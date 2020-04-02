import { Component, OnInit } from '@angular/core';
import {
  getLink,
  REGISTRATION,
  ADD_POST,
  PROFILE,
  MY_POSTS,
} from '../../constants/routes';
import { AuthService } from '@services/auth-service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  registrationLink = getLink(REGISTRATION);
  myPosts = getLink(MY_POSTS);
  profile = getLink(PROFILE);
  createPost = getLink(ADD_POST);

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  get isAuthorized() {
    return this.authService.accessToken;
  }
}
