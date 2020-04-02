import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaFormComponent } from './textarea-form.component';

describe('TextareaFormComponent', () => {
  let component: TextareaFormComponent;
  let fixture: ComponentFixture<TextareaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextareaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
