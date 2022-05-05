import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityRankingComponent } from './activity-ranking.component';

describe('ActivityRankingComponent', () => {
  let component: ActivityRankingComponent;
  let fixture: ComponentFixture<ActivityRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
