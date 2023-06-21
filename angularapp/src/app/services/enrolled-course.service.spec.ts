import { TestBed } from '@angular/core/testing';

import { EnrolledCourseService } from './enrolled-course.service';

describe('EnrolledCourseService', () => {
  let service: EnrolledCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrolledCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
