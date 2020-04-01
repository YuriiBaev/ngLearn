import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth-service/auth.service';
import { getLink, EDIT_PROFILE } from 'app/constants/routes';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  editProfile = getLink(EDIT_PROFILE);

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

}
