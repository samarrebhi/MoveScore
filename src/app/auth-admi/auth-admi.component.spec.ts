import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthAdmiComponent } from './auth-admi.component';

describe('AuthAdmiComponent', () => {
  let component: AuthAdmiComponent;
  let fixture: ComponentFixture<AuthAdmiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthAdmiComponent]
    });
    fixture = TestBed.createComponent(AuthAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
