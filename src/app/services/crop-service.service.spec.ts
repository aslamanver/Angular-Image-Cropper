import { TestBed } from '@angular/core/testing';

import { CropServiceService } from './crop-service.service';

describe('CropServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CropServiceService = TestBed.get(CropServiceService);
    expect(service).toBeTruthy();
  });
});
