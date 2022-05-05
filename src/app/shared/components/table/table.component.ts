import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() columns: any[] = [];
  @Input() values: any[] = [];
  @Input() columnsSettings: any[] = [];
  @Input() valuesSettings: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public getNumberOfProperties(value: string) {
    return Array(Object.keys(value).length).fill(null).map((x, i) => i)
  }

}
