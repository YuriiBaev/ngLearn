import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPostsComponent } from './my-posts.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MyPostsComponent', () => {
  let component: MyPostsComponent;
  let fixture: ComponentFixture<MyPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPostsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
