import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormComponent } from './input-form.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('InputFormComponent', () => {
  let component: InputFormComponent;
  let fixture: ComponentFixture<InputFormComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [InputFormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: FormBuilder, useValue: formBuilder }
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFormComponent);
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
