import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfeNotificationComponent } from './pfe-notification.component';

describe('PfeNotificationComponent', () => {
  let component: PfeNotificationComponent;
  let fixture: ComponentFixture<PfeNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfeNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfeNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
