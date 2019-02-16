import { TestBed } from '@angular/core/testing';

import { ProductuploadService } from './productupload.service';

describe('ProductuploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductuploadService = TestBed.get(ProductuploadService);
    expect(service).toBeTruthy();
  });
});
