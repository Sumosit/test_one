import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TabsInterface} from "@shared/interfaces/tabs-interface";

@Component({
  selector: 'app-tabs-sec',
  templateUrl: './tabs-sec.component.html',
  styleUrls: ['./tabs-sec.component.scss']
})
export class TabsSecComponent implements OnInit {

  @Input() tabs: TabsInterface[] = [];
  @Input() paddingTop: string = ''
  @Input() paddingBottom: string = ''

  @Output() currentTab: any = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    if (this.tabs) {
      this.tabs[0].active = true;
    }
  }

  emitCurrentTab(value: TabsInterface) {
    this.currentTab.emit(value);
  }

  clickTab(value: TabsInterface) {
    let temp;
    this.tabs.forEach((tab) => {
      if (tab.header !== value.header) {
        tab.active = false;
      } else if (tab.header === value.header) {
        tab.active = true;
        temp = value;
      }
    })
    if (temp) {
      this.currentTab.emit(temp);
    }
  }

}
