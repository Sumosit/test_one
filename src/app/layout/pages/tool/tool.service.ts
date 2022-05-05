import {Injectable} from '@angular/core';
import {TabsInterface} from "@shared/interfaces/tabs-interface";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  public currentTab: TabsInterface = <TabsInterface>{};

  public pathTree: any = [
    {
      name: 'Торги'
    },
    {
      name: 'Финансовые инструменты'
    }
  ]

  public tabs: TabsInterface[] = [
    {
      header: 'Характеристика ценной бумаги',
      translateCode: '',
      link: 'specifications',
      active: false
    },
    {
      header: 'Торги',
      translateCode: '',
      link: 'bidding',
      active: false
    }
  ]

  constructor(private router: Router) {
  }

  start() {

  }

  setCurrentTab(code: string, link: string) {
    this.tabs.map(x => x.active = false);
    this.tabs.forEach(tab => {
      if (tab.link === link) {
        tab.active = true;
        this.currentTab = tab;
        this.router.navigate(['tool/' + code]);
      }
    })
  }
}
