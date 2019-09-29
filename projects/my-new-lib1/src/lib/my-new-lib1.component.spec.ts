import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewLib1Component } from './my-new-lib1.component';

describe('MyNewLib1Component', () => {
  let component: MyNewLib1Component;
  let fixture: ComponentFixture<MyNewLib1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewLib1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewLib1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
