import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth-service/auth.service';
import { getLink, EDIT_PROFILE } from 'src/app/constants/routes';

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
