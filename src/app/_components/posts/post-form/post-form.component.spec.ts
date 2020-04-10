import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFormComponent } from './post-form.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('PostCreateComponent', () => {
  let component: PostFormComponent;
  let fixture: ComponentFixture<PostFormComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostFormComponent ],
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule,
      ],
      providers: [
        { provide: FormBuilder, useValue: formBuilder }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
