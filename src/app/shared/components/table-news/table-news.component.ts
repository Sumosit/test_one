import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-news',
  templateUrl: './table-news.component.html',
  styleUrls: ['./table-news.component.scss']
})
export class TableNewsComponent implements OnInit {
  @Input() columns: any[] = []
  @Input() values: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

  public getNumberOfProperties(value: string) {
    return Array(Object.keys(value).length).fill(null).map((x, i) => i)
  }

}
