import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomaWinnersOfNominationsComponent } from './diploma-winners-of-nominations.component';

describe('DiplomaWinnersOfNominationsComponent', () => {
  let component: DiplomaWinnersOfNominationsComponent;
  let fixture: ComponentFixture<DiplomaWinnersOfNominationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiplomaWinnersOfNominationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplomaWinnersOfNominationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
