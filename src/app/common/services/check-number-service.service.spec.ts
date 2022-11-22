import { TestBed } from '@angular/core/testing';

import { CheckNumberServiceService } from './check-number-service.service';

describe('CheckNumberServiceService', () => {
  let service: CheckNumberServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckNumberServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
