import { TestBed } from '@angular/core/testing';

import { AgsExtensionService } from './ags-extension.service';

describe('AgsExtensionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgsExtensionService = TestBed.get(AgsExtensionService);
    expect(service).toBeTruthy();
  });
});
