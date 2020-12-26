import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisedSubjectsComponent } from './supervised-subjects.component';

describe('SupervisedSubjectsComponent', () => {
  let component: SupervisedSubjectsComponent;
  let fixture: ComponentFixture<SupervisedSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisedSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisedSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
