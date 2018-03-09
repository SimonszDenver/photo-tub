import { TestBed, inject } from '@angular/core/testing';

import { EditButtonService } from './edit-button.service';

describe('EditButtonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditButtonService]
    });
  });

  it('should be created', inject([EditButtonService], (service: EditButtonService) => {
    expect(service).toBeTruthy();
  }));
});
