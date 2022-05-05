import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfKaseMembersComponent } from './list-of-kase-members.component';

describe('ListOfKaseMembersComponent', () => {
  let component: ListOfKaseMembersComponent;
  let fixture: ComponentFixture<ListOfKaseMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfKaseMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfKaseMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
