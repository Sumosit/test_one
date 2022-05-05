import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-icons',
  templateUrl: './table-icons.component.html',
  styleUrls: ['./table-icons.component.scss']
})
export class TableIconsComponent implements OnInit {

  @Input() columns: any[] = [];
  @Input() values: any[] = [];
  @Input() columnsSettings: any[] = [];
  @Input() valuesSettings: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  public getNumberOfProperties(value: string) {
    return Array(Object.keys(value).length).fill(null).map((x, i) => i)
  }

  public link(value: string) {
    window.open('https://' + value, '_blank');
  }

}
