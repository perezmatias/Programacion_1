import { TestBed } from '@angular/core/testing';

import { PlanifService } from './planif.service';

describe('PlanifService', () => {
  let service: PlanifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
