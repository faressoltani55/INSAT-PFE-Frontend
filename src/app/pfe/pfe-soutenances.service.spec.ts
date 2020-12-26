import { TestBed } from '@angular/core/testing';

import { PfeSoutenancesService } from './pfe-soutenances.service';

describe('PfeSoutenancesService', () => {
  let service: PfeSoutenancesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PfeSoutenancesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
