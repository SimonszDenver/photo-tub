import { TestBed, inject } from '@angular/core/testing';

import { AdjustmentButtonOptionsService } from './adjustment-button-options.service';

describe('AdjustmentButtonOptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdjustmentButtonOptionsService]
    });
  });

  it('should be created', inject([AdjustmentButtonOptionsService], (service: AdjustmentButtonOptionsService) => {
    expect(service).toBeTruthy();
  }));
});
