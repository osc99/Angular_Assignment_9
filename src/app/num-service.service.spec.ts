import { TestBed } from '@angular/core/testing';

import { NumServiceService } from './num-service.service';

describe('NumServiceService', () => {
  let service: NumServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
