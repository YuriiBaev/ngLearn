import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent {
  @Input() onChange: (val: string) => void;
  @Input() suggestions: string[];
  @Input() label: string;

  value = '';

  onValueChange = (value: string) => {
    this.value = value;
    this.onChange(value);
  }

  isMatch = (value = '', suggestion = '') => (
    suggestion.toLowerCase().includes(value.toLowerCase())
  )
}
