import { TestBed } from '@angular/core/testing';

import { ToolBiddingService } from './tool-bidding.service';

describe('ToolBiddingService', () => {
  let service: ToolBiddingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolBiddingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
