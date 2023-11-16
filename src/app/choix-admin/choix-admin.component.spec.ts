import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixAdminComponent } from './choix-admin.component';

describe('ChoixAdminComponent', () => {
  let component: ChoixAdminComponent;
  let fixture: ComponentFixture<ChoixAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoixAdminComponent]
    });
    fixture = TestBed.createComponent(ChoixAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
