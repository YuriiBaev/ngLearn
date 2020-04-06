import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface Option {
  value: string | number;
  label?: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() options: Option[];
  @Input() form: FormGroup;
  @Input() name: string;
  @Input() label: string;

  trackByFn(index, item) {
    return item.value;
  }

  onChange = ({target}) => {
    this.form.patchValue({[name]: target.value});
  }
}
