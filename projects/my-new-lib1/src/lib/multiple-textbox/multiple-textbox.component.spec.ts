import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleTextboxComponent } from './multiple-textbox.component';

describe('MultipleTextboxComponent', () => {
  let component: MultipleTextboxComponent;
  let fixture: ComponentFixture<MultipleTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
