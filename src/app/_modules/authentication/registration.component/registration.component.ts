import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@services/auth-service/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, this.confirmPasswordValidator]],
    });

    this.registrationForm.valueChanges.subscribe(({password}) => {
      const confirmationPasswordControl = this.getFormControl('confirmPassword');

      if (password && confirmationPasswordControl.disabled) {
        confirmationPasswordControl.enable();
      }
    });
  }

  getFormControl(name: string) {
    return this.registrationForm && this.registrationForm.controls[name];
  }

  getFormValue(name: string) {
    return this.registrationForm && this.registrationForm.value[name];
  }

  confirmPasswordValidator = ({value}: AbstractControl) => {
    if (!this.registrationForm) { return null; }

    const password = this.getFormValue('password');

    if (!password) {
      this.getFormControl('confirmPassword').disable();

      return null;
    }

    if (password !== value) {
      return {passwordMismatch: true};
    } else {
      return null;
    }
  }

  onSubmit() {
    this.authService.registration(this.registrationForm.value);
  }
}
