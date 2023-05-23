import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToNumberComponent } from './to-number.component';

describe('ToNumberComponent', () => {
  let component: ToNumberComponent;
  let fixture: ComponentFixture<ToNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToNumberComponent]
    });
    fixture = TestBed.createComponent(ToNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
