import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TabsInterface} from "@shared/interfaces/tabs-interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() tabs: TabsInterface[] = [];
  @Output() currentTab: any = new EventEmitter<string>();

  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }

  emitCurrentTab(value: TabsInterface) {
    this.currentTab.emit(value);
  }

  clickTab(value: TabsInterface) {
    let temp: any;
    this.tabs.forEach((tab) => {
      if (tab.header !== value.header) {
        tab.active = false;
      } else if (tab.header === value.header) {
        tab.active = true;
        temp = tab;
      }
    })
    if (temp) {
      this.currentTab.emit(temp.link);
    }
  }

}
