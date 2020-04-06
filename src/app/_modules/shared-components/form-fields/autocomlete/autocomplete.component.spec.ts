import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocimpeteComponent } from './autocomplete.component';

describe('AutocimpeteComponent', () => {
  let component: AutocimpeteComponent;
  let fixture: ComponentFixture<AutocimpeteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocimpeteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocimpeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
