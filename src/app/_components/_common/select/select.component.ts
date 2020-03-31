import { Component, Input } from '@angular/core';

interface Option {
  value: string | number;
  label?: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Input() options: Option[];
  @Input() value: Option;
  @Input() onChange: (e: Event) => void;

  trackByFn(index, item) {
    return item.value;
  }
}
