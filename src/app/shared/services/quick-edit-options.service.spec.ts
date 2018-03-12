import { TestBed, inject } from '@angular/core/testing';

import { QuickEditOptionsService } from './quick-edit-options.service';

describe('QuickEditOptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuickEditOptionsService]
    });
  });

  it('should be created', inject([QuickEditOptionsService], (service: QuickEditOptionsService) => {
    expect(service).toBeTruthy();
  }));
});
