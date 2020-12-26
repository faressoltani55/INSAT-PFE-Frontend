import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfeListingComponent } from './pfe-listing.component';

describe('PfeListingComponent', () => {
  let component: PfeListingComponent;
  let fixture: ComponentFixture<PfeListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfeListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
