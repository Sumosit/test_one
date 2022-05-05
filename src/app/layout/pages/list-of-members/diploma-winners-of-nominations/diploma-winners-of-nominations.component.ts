import { Component, OnInit } from '@angular/core';
import {ListOfMembersService} from "@layout/pages/list-of-members/list-of-members.service";

@Component({
  selector: 'app-diploma-winners-of-nominations',
  templateUrl: './diploma-winners-of-nominations.component.html',
  styleUrls: ['./diploma-winners-of-nominations.component.scss']
})
export class DiplomaWinnersOfNominationsComponent implements OnInit {

  constructor(private listOfMembersService: ListOfMembersService) { }

  ngOnInit(): void {
  }

  getDiplomaValues() {
    return this.listOfMembersService.diplomaValues;
  }

}
