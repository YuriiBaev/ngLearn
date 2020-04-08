import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormsValidationService {
  serverErrors$: BehaviorSubject<string>;

  constructor() {
    this.serverErrors$ = new BehaviorSubject<string>(null);
  }

  catchFormErrors = (errors) => {
    this.serverErrors$.next(errors.error);
  }

  get serverError() {
    return this.serverErrors$.value;
  }

  resetError() {
    this.serverErrors$.next(null);
  }

  validate = (form: FormGroup, fieldName: string) => {
    const formControl = form.controls[fieldName];
    if (formControl.invalid && formControl.touched && formControl.errors) {
      return this.getErrorMessage(formControl.errors);
    }
    return false;
  }

  getErrorMessage = (errors) => {
    const firstError = Object.keys(errors)[0];

    switch (firstError) {
      case 'required':
        return 'This field is required';
      case 'minlength':
        return 'Length of password should be more than 6 symbols';
      case 'passwordMismatch':
        return 'Check your confirmation password it should be the same as password';
      default:
          return firstError;

    }
  }
}
