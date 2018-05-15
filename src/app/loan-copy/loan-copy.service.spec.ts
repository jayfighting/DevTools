import { TestBed, inject } from '@angular/core/testing';

import { LoanCopyService } from './loan-copy.service';

describe('LoanCopyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoanCopyService]
    });
  });

  it('should be created', inject([LoanCopyService], (service: LoanCopyService) => {
    expect(service).toBeTruthy();
  }));
});
