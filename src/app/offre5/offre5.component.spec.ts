import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Offre5Component } from './offre5.component';

describe('Offre5Component', () => {
  let component: Offre5Component;
  let fixture: ComponentFixture<Offre5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Offre5Component]
    });
    fixture = TestBed.createComponent(Offre5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
