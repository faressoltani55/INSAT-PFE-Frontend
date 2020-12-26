import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatedSoutenancesComponent } from './associated-soutenances.component';

describe('AssociatedSoutenancesComponent', () => {
  let component: AssociatedSoutenancesComponent;
  let fixture: ComponentFixture<AssociatedSoutenancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociatedSoutenancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatedSoutenancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
