import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectComponent } from './form-fields/select/select.component';
import { AutocompleteComponent } from './form-fields/autocomlete/autocomplete.component';
import { InputFormComponent } from './form-fields/input-form/input-form.component';
import { ImageUploaderComponent } from './form-fields/image-uploader/image-uploader.component';
import { TextareaFormComponent } from './form-fields/textarea-form/textarea-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    TextareaFormComponent,
    SelectComponent,
    AutocompleteComponent,
    InputFormComponent,
    ImageUploaderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DragDropModule,
  ],
  exports: [
    TextareaFormComponent,
    SelectComponent,
    AutocompleteComponent,
    InputFormComponent,
    ImageUploaderComponent,
  ]
})
export class SharedComponentsModule { }
