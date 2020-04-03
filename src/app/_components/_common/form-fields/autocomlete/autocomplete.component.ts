import { Component, Input, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormsValidationService } from '@services/forms-validation/forms-validation.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit, OnDestroy {
  @Input() suggestions: string[];
  @Input() label: string;
  @Input() name: string;
  @Input() form: FormGroup;

  @ViewChild('suggestionRef', { static: false }) suggestionRef;

  value = '';
  isSuggestionOpen = false;

  constructor(
    private formsValidation: FormsValidationService,
  ) {}

  public ngOnInit() {
    this.onDocumentClick = this.onDocumentClick.bind(this);
    document.addEventListener('click', this.onDocumentClick);
    this.onValueChange();
  }

  public ngOnDestroy() {
    document.removeEventListener('click', this.onDocumentClick);
  }

  protected onDocumentClick(event: MouseEvent) {
    if (this.suggestionRef.nativeElement.contains(event.target)) {
      return;
    }
    this.isSuggestionOpen = false;
  }

  onValueChange = () => {
    this.form.valueChanges.subscribe(val => {
      const value = val[this.name];
      if (this.value !== value) {
        this.value = value;
        this.isSuggestionOpen = true;
      }
    });
  }

  onSuggestionSelect(value) {
    this.form.patchValue({[this.name]: value});
    this.isSuggestionOpen = false;
  }

  isMatch = (value = '', suggestion = '') => (
    suggestion.toLowerCase().includes(this.value.toLowerCase())
  )

  validate(field: string) {
    return this.formsValidation.validate(this.form, field);
  }
}
