import { ComponentFixture, TestBed } from '@angular/core/testing';

import { resultsComponent } from './results.component';

describe('ResultsComponent', () => {
  let component: resultsComponent;
  let fixture: ComponentFixture<resultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [resultsComponent]
    });
    fixture = TestBed.createComponent(resultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
