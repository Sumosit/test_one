import {Component, OnDestroy, OnInit} from '@angular/core';
import {ListOfMembersService} from "@layout/pages/list-of-members/list-of-members.service";
import {environment} from "@environment/environment";
import {CompatClient, Stomp, StompSubscription} from "@stomp/stompjs";
import {StompClientService} from "@shared/services/stomp-client.service";

@Component({
  selector: 'app-list-of-members',
  templateUrl: './list-of-members.component.html',
  styleUrls: ['./list-of-members.component.scss']
})
export class ListOfMembersComponent implements OnInit, OnDestroy {

  private stompClient: CompatClient | undefined;

  constructor(private listOfMembersService: ListOfMembersService) { }

  ngOnInit(): void {
    this.listOfMembersService.start();
  }

  getTabs() {
    return this.listOfMembersService.tabs;
  }

  getEmitCurrentTab(link: string): void {
    this.listOfMembersService.setCurrentTab(link);
  }

  subscribeToListOfOrganizations() {
  }

  ngOnDestroy(): void {
    this.listOfMembersService.end();
  }

}
