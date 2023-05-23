import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToRomanComponent } from './to-roman.component';

describe('ToRomanComponent', () => {
  let component: ToRomanComponent;
  let fixture: ComponentFixture<ToRomanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToRomanComponent]
    });
    fixture = TestBed.createComponent(ToRomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
