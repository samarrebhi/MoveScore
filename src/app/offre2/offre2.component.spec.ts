import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Offre2Component } from './offre2.component';

describe('Offre2Component', () => {
  let component: Offre2Component;
  let fixture: ComponentFixture<Offre2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Offre2Component]
    });
    fixture = TestBed.createComponent(Offre2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
