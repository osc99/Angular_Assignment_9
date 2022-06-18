import { TestBed } from '@angular/core/testing';

import { ArithMaticService } from './arith-matic.service';

describe('ArithMaticService', () => {
  let service: ArithMaticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArithMaticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
