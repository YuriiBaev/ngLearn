import { Component, OnInit } from '@angular/core';

import { getLink, EDIT_PROFILE } from 'app/constants/routes';
import { AuthService } from '@services/auth-service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  editProfile = getLink(EDIT_PROFILE);

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

}
