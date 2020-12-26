import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfeSubjectCardComponent } from './pfe-subject-card.component';

describe('PfeSubjectCardComponent', () => {
  let component: PfeSubjectCardComponent;
  let fixture: ComponentFixture<PfeSubjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfeSubjectCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfeSubjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
