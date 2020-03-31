import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../_services/auth-service/auth.service';
import { convertToB64 } from '../../../helper/file';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
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

  setPhoto = async (event) => {
    const image = event.target.files[0];
    const converted = await convertToB64(image);

    this.editProfileForm.patchValue({avatar: converted});
  }

  onSubmit() {
    this.authService.editProfile(this.editProfileForm.value);
  }

  setGender = ({target}) => {
    this.editProfileForm.patchValue({gender: target.value});
  }
}
