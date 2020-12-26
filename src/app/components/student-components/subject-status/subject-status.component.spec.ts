import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectStatusComponent } from './subject-status.component';

describe('SubjectStatusComponent', () => {
  let component: SubjectStatusComponent;
  let fixture: ComponentFixture<SubjectStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
