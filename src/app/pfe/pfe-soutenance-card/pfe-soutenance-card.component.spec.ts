import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfeSoutenanceCardComponent } from './pfe-soutenance-card.component';

describe('PfeSoutenanceCardComponent', () => {
  let component: PfeSoutenanceCardComponent;
  let fixture: ComponentFixture<PfeSoutenanceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfeSoutenanceCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfeSoutenanceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
