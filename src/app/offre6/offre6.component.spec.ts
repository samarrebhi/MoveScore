import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Offre6Component } from './offre6.component';

describe('Offre6Component', () => {
  let component: Offre6Component;
  let fixture: ComponentFixture<Offre6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Offre6Component]
    });
    fixture = TestBed.createComponent(Offre6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
