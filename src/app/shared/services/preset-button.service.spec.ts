import { TestBed, inject } from '@angular/core/testing';

import { PresetButtonService } from './preset-button.service';

describe('PresetButtonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PresetButtonService]
    });
  });

  it('should be created', inject([PresetButtonService], (service: PresetButtonService) => {
    expect(service).toBeTruthy();
  }));
});
