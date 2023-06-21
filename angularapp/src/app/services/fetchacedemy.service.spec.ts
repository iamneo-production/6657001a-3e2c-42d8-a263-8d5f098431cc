import { TestBed } from '@angular/core/testing';

import { FetchacedemyService } from './fetchacedemy.service';

describe('FetchacedemyService', () => {
  let service: FetchacedemyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchacedemyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});