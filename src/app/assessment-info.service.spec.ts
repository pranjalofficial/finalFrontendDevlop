import { TestBed } from '@angular/core/testing';

import { AssessmentInfoService } from './assessment-info.service';

describe('AssessmentInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssessmentInfoService = TestBed.get(AssessmentInfoService);
    expect(service).toBeTruthy();
  });
});
