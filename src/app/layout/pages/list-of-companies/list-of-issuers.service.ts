import { Injectable } from '@angular/core';
import {TabsInterface} from "@shared/interfaces/tabs-interface";
import {OfficialListCols} from "@layout/pages/list-of-companies/official-list-table/official-list-cols";
import {OfficialListValuesInterface} from "@shared/interfaces/official-list-values-interface";
import {OfficialListColsSettings} from "@layout/pages/list-of-companies/official-list-table/official-list-cols-settings";
import {OfficialListValuesSettings} from "@layout/pages/list-of-companies/official-list-table/official-list-values-settings";

@Injectable({
  providedIn: 'root'
})
export class ListOfIssuersService {

  public currentTab: TabsInterface = <TabsInterface>{};

  public tabs: TabsInterface[] = [
    {
      header: 'Официальный список',
      translateCode: '',
      link: 'official-list',
      active: false
    },
    {
      header: 'Нелистинговые',
      translateCode: '',
      link: 'unlisted',
      active: false
    }
  ]

  public officialListCols: any[] = OfficialListCols;
  public officialListValues: OfficialListValuesInterface[] = [];
  public tableColsSettings = OfficialListColsSettings;
  public tableValuesSettings = OfficialListValuesSettings

  constructor() { }

  start() {
    this.setCurrentTab(this.tabs[0].link);

    // test data
    for (let i = 0; i < 24; i++) {
      this.officialListValues.push({
        code: {text: 'AAFD', img: ''},
        company: {text: 'АзияАгроФуд', img: 'assets/images/const-svgs/companies-logo/kaspi-icon.svg'},
        quantityTools: {text: '1', img: ''},
        website: {text: 'www.asiaagrofood.kz', img: 'assets/images/const-svgs/globe-icon.svg'},
        capitalizationKztBillion: {text: '0,00', img: ''}
      })
    }
  }

  setCurrentTab(link: string) {
    this.tabs.forEach(tab => {
      if (tab.link === link) {
        tab.active = true;
        this.currentTab = tab;
      }
    })
  }

  getOfficialListValues() {
    return this.officialListValues;
  }
}
