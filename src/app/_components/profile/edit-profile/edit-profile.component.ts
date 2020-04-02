import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@services/auth-service/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  editProfileForm: FormGroup;
  genderOptions = [
    {value: 'male', label: 'Male'},
    {value: 'female', label: 'Female'},
  ];

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    const { avatar, name, surname, email, gender } = this.authService.user;

    this.editProfileForm = this.formBuilder.group({
      avatar: [avatar, Validators.required],
      name: [name, Validators.required],
      surname: [surname, Validators.required],
      email: [email, Validators.required],
      gender: [gender, Validators.required],
    });
  }

  onSubmit() {
    this.authService.editProfile(this.editProfileForm.value);
  }
}
