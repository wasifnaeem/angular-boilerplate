import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordVisibilityControlComponent } from './password-visibility-control.component';

describe('PasswordVisibilityControlComponent', () => {
  let component: PasswordVisibilityControlComponent;
  let fixture: ComponentFixture<PasswordVisibilityControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordVisibilityControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordVisibilityControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
