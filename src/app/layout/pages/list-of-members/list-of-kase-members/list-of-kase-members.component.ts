import { Component, OnInit } from '@angular/core';
import {ListOfMembersService} from "@layout/pages/list-of-members/list-of-members.service";

@Component({
  selector: 'app-list-of-kase-members',
  templateUrl: './list-of-kase-members.component.html',
  styleUrls: ['./list-of-kase-members.component.scss']
})
export class ListOfKaseMembersComponent implements OnInit {

  constructor(private listOfMembersService: ListOfMembersService) { }

  ngOnInit(): void {
  }

  getTabsListOfKaseMembers() {
    return this.listOfMembersService.tabsListOfKaseMembers;
  }

  getMembersCols() {
    return this.listOfMembersService.membersCols
  }

  getMembersValues() {
    return this.listOfMembersService.memberValues;
  }

  getMembersColsSettings() {
    return this.listOfMembersService.membersColsSetting;
  }

  getMembersValueSetting() {
    return this.listOfMembersService.membersValuesSetting;
  }

}
