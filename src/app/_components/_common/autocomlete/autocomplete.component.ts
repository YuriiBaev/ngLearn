import { Component, Input, ViewEncapsulation, ViewChild, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit, OnDestroy {
  @Input() onChange: (val: string) => void;
  @Input() suggestions: string[];
  @Input() label: string;

  @ViewChild('suggestionRef', { static: false }) suggestionRef;

  value = '';
  isSuggestionOpen = false;

  public ngOnInit() {
    this.onDocumentClick = this.onDocumentClick.bind(this);
    document.addEventListener('click', this.onDocumentClick);
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

  onValueChange = (event) => {
    this.isSuggestionOpen = true;
    this.value = event.target.value;
    this.onChange(this.value);
  }

  onSuggestionSelect(value) {
    this.isSuggestionOpen = false;
    this.value = value;
    this.onChange(value);
  }

  isMatch = (value = '', suggestion = '') => (
    suggestion.toLowerCase().includes(value.toLowerCase())
  )
}
