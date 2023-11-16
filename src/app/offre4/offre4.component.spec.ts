import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Offre4Component } from './offre4.component';

describe('Offre4Component', () => {
  let component: Offre4Component;
  let fixture: ComponentFixture<Offre4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Offre4Component]
    });
    fixture = TestBed.createComponent(Offre4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
