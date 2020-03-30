import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/_services/auth-service/auth-service.service';
import { getLink, REGISTRATION } from '../../../constants/routes';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  registrationLink = getLink(REGISTRATION);

  constructor(
    private formBuilder: FormBuilder,
    private authServiceService: AuthServiceService,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.authServiceService.login(this.loginForm.value);
  }
}
