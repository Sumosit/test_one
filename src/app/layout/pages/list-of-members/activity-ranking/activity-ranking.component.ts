import { Component, OnInit } from '@angular/core';
import {ListOfMembersService} from "@layout/pages/list-of-members/list-of-members.service";

@Component({
  selector: 'app-activity-ranking',
  templateUrl: './activity-ranking.component.html',
  styleUrls: ['./activity-ranking.component.scss']
})
export class ActivityRankingComponent implements OnInit {

  constructor(private listOfMembersService: ListOfMembersService) { }

  ngOnInit(): void {
  }

  getTabsActivityRanking() {
    return this.listOfMembersService.tabsActivityRanking;
  }

  getActivityCols() {
    return this.listOfMembersService.activityCols
  }

  getActivityValues() {
    return this.listOfMembersService.activityValues;
  }

  getActivityColsSettings() {
    return this.listOfMembersService.activityColsSetting;
  }

  getActivityValueSetting() {
    return this.listOfMembersService.activityValuesSetting;
  }

}
