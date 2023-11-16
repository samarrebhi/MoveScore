import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Offre1Component } from './offre1.component';

describe('Offre1Component', () => {
  let component: Offre1Component;
  let fixture: ComponentFixture<Offre1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Offre1Component]
    });
    fixture = TestBed.createComponent(Offre1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
