import { TestBed } from '@angular/core/testing';

import { ToolSpecificationsService } from './tool-specifications.service';

describe('ToolSpecificationsService', () => {
  let service: ToolSpecificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolSpecificationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
