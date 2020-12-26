import { TestBed } from '@angular/core/testing';

import { PfeSubjectsService } from './pfe-subjects.service';

describe('PfeSubjectsService', () => {
  let service: PfeSubjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PfeSubjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
