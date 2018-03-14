import { TestBed, inject } from '@angular/core/testing';

import { BorderButtonOptionsService } from './border-button-options.service';

describe('BorderButtonOptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BorderButtonOptionsService]
    });
  });

  it('should be created', inject([BorderButtonOptionsService], (service: BorderButtonOptionsService) => {
    expect(service).toBeTruthy();
  }));
});
