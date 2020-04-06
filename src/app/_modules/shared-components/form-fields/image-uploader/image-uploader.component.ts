import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { moveItemInArray, CdkDragEnter } from '@angular/cdk/drag-drop';

import { FormsValidationService } from '@services/forms-validation/forms-validation.service';

import { convertToB64 } from 'app/helper/file';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() name: string;
  @Input() multiple = false;

  defaultPhoto = 'assets/image/picture-upload.png';
  images: string[] = [];

  constructor(
    private formsValidation: FormsValidationService,
  ) {
  }

  ngOnInit(): void {
    if (this.form.value[this.name]) {
      this.images = this.form.value[this.name];
    }
  }

  setPhoto = async (event) => {
    const files = Array.from(event.target.files);
    this.images = await Promise.all(files.map((file: File) => convertToB64(file)));

    this.form.patchValue({[this.name]: this.images});
  }

  validate(field: string) {
    return this.formsValidation.validate(this.form, field);
  }

  onDragged(event: CdkDragEnter) {
    moveItemInArray(this.images, event.item.data, event.container.data);
  }

  trackByFn(index, item) {
    return item;
  }
}
