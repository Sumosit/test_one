import { TestBed } from '@angular/core/testing';

import { ListOfMembersService } from './list-of-members.service';

describe('ListOfMembersService', () => {
  let service: ListOfMembersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListOfMembersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
