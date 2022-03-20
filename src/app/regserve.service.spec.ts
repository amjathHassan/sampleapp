import { TestBed } from '@angular/core/testing';

import { RegserveService } from './regserve.service';

describe('RegserveService', () => {
  let service: RegserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
