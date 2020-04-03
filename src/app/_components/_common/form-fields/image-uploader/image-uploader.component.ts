import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormsValidationService } from '@services/forms-validation/forms-validation.service';

import { convertToB64 } from '../../../../helper/file';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent {
  @Input() form: FormGroup;
  @Input() name: string;
  @Input() label: string;

  defaultPhoto = 'assets/image/picture-upload.png';

  constructor(
    private formsValidation: FormsValidationService,
  ) { }

  setPhoto = async (event) => {
    const image = event.target.files[0];
    const converted = await convertToB64(image);

    this.form.patchValue({[this.name]: converted});
  }

  validate(field: string) {
    return this.formsValidation.validate(this.form, field);
  }
}
