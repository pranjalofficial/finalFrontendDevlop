import { TestBed } from '@angular/core/testing';

import { ReqConnService } from './req-conn.service';

describe('ReqConnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReqConnService = TestBed.get(ReqConnService);
    expect(service).toBeTruthy();
  });
});
