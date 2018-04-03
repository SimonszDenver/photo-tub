import { TestBed, inject } from '@angular/core/testing';

import { OperationButtonService } from './operation-button.service';

describe('OperationButtonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OperationButtonService]
    });
  });

  it('should be created', inject([OperationButtonService], (service: OperationButtonService) => {
    expect(service).toBeTruthy();
  }));
});
