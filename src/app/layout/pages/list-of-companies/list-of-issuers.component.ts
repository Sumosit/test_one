import { Component, OnInit } from '@angular/core';
import {ListOfIssuersService} from "@layout/pages/list-of-companies/list-of-issuers.service";

@Component({
  selector: 'app-list-of-issuers',
  templateUrl: './list-of-issuers.component.html',
  styleUrls: ['./list-of-issuers.component.scss']
})
export class ListOfIssuersComponent implements OnInit {

  public searchCode: string = '';

  constructor(public listOfCompaniesService: ListOfIssuersService) { }

  ngOnInit(): void {
    this.listOfCompaniesService.start();
  }

  getEmitCurrentTab(link: string): void {
    this.listOfCompaniesService.setCurrentTab(link);
  }

  getOfficialListValues() {
    return this.listOfCompaniesService.getOfficialListValues().filter(x => x.code.text.toLowerCase().includes(this.searchCode.toLowerCase()));
  }

}
