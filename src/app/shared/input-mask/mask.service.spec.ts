import { TestBed, inject } from '@angular/core/testing';

import { MaskService } from './mask.service';

describe('MaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaskService]
    });
  });

  it('should be created', inject([MaskService], (service: MaskService) => {
    expect(service).toBeTruthy();
  }));
});
