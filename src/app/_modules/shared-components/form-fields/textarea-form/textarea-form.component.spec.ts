import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaFormComponent } from './textarea-form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('TextareaFormComponent', () => {
  let component: TextareaFormComponent;
  let fixture: ComponentFixture<TextareaFormComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [TextareaFormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: FormBuilder, useValue: formBuilder}
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaFormComponent);
    component = fixture.componentInstance;
    component.form = formBuilder.group({
      test: []
    });
    component.name = 'test';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
