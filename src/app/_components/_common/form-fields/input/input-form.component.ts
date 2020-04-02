import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsValidationService } from '@services/forms-validation/forms-validation.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent {
  @Input() form: FormGroup;
  @Input() name: string;
  @Input() label: string;
  @Input() type = 'text';
  @Input() autocomplete = '';

  constructor(
    private formsValidation: FormsValidationService
  ) {
  }

  validate(field: string) {
    return this.formsValidation.validate(this.form, field);
  }
}
