import { TestBed } from '@angular/core/testing';

import { SMTService } from './smt.service';

describe('SMTService', () => {
  let service: SMTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SMTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
