import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsValidationService {
  validate = (form: FormGroup, fieldName: string) => (
    form.controls[fieldName].invalid && form.controls[fieldName].touched
  )
}
