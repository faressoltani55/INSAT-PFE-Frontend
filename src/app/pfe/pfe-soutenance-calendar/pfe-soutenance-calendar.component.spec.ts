import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfeSoutenanceCalendarComponent } from './pfe-soutenance-calendar.component';

describe('PfeSoutenanceCalendarComponent', () => {
  let component: PfeSoutenanceCalendarComponent;
  let fixture: ComponentFixture<PfeSoutenanceCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfeSoutenanceCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfeSoutenanceCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
