import { TestBed, inject } from '@angular/core/testing';

import { QuickEditButtonService } from './quick-edit-button.service';

describe('QuickEditButtonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuickEditButtonService]
    });
  });

  it('should be created', inject([QuickEditButtonService], (service: QuickEditButtonService) => {
    expect(service).toBeTruthy();
  }));
});
