import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormsValidationService } from '@services/forms-validation/forms-validation.service';

@Component({
  selector: 'app-textarea-form',
  templateUrl: './textarea-form.component.html',
  styleUrls: ['./textarea-form.component.scss']
})
export class TextareaFormComponent {
  @Input() form: FormGroup;
  @Input() name: string;
  @Input() label: string;

  constructor(
    private formsValidation: FormsValidationService
  ) {
  }

  validate(field: string) {
    return this.formsValidation.validate(this.form, field);
  }
}
