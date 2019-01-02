import { TestBed } from '@angular/core/testing';

import { CustomActionsService } from './custom-actions.service';

describe('CustomActionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomActionsService = TestBed.get(CustomActionsService);
    expect(service).toBeTruthy();
  });
});
