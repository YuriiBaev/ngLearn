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

  validate = (form: FormGroup, fieldName: string) => (
    form.controls[fieldName].invalid && form.controls[fieldName].touched
  )
}
