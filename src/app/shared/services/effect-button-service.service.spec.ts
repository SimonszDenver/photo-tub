import { TestBed, inject } from '@angular/core/testing';

import { EffectButtonServiceService } from './effect-button-service.service';

describe('EffectButtonServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EffectButtonServiceService]
    });
  });

  it('should be created', inject([EffectButtonServiceService], (service: EffectButtonServiceService) => {
    expect(service).toBeTruthy();
  }));
});
