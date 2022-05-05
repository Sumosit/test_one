import {Injectable} from '@angular/core';
import {TabsInterface} from "@shared/interfaces/tabs-interface";
import {MembersCols} from "@layout/pages/list-of-members/list-of-kase-members/table/members-cols";
import {OfficialListValuesInterface} from "@shared/interfaces/official-list-values-interface";
import {MembersColsSettings} from "@layout/pages/list-of-members/list-of-kase-members/table/members-cols-settings";
import {MembersValuesSettings} from "@layout/pages/list-of-members/list-of-kase-members/table/members-values-settings";
import {ActivityRankingCols} from "@layout/pages/list-of-members/activity-ranking/table/activity-ranking-cols";
import {ActivityValuesInterface} from "@layout/pages/list-of-members/activity-ranking/table/activity-values-interface";
import {
  ActivityRankingColsSettings
} from "@layout/pages/list-of-members/activity-ranking/table/activity-ranking-cols-settings";
import {
  ActivityRankingValuesSettings
} from "@layout/pages/list-of-members/activity-ranking/table/activity-ranking-values-settings";
import {
  MembersValuesInterface
} from "@layout/pages/list-of-members/list-of-kase-members/table/members-values-interface";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "@environment/environment";

@Injectable({
  providedIn: 'root'
})
export class ListOfMembersService {

  public currentTab: TabsInterface = <TabsInterface>{};

  public tabs: TabsInterface[] = [
    {
      header: 'Список членов KASE',
      translateCode: '',
      link: 'list-of-kase-members',
      active: false
    },
    {
      header: 'Рэнкинг активности',
      translateCode: '',
      link: 'activity-ranking',
      active: false
    },
    {
      header: 'Дипломанты номинаций',
      translateCode: '',
      link: 'diploma-winners-of-nominations',
      active: false
    }
  ]

  public tabsListOfKaseMembers: TabsInterface[] = [
    {
      header: 'Все компании',
      translateCode: '',
      link: '',
      active: false
    },
    {
      header: 'Банки',
      translateCode: '',
      link: '',
      active: false
    },
    {
      header: 'Брокеры',
      translateCode: '',
      link: '',
      active: false
    }
  ]
  public tabsActivityRanking: TabsInterface[] = [
    {
      header: 'Долевые ЦБ',
      translateCode: '',
      link: '',
      active: false
    },
    {
      header: 'Долговые ЦБ',
      translateCode: '',
      link: '',
      active: false
    },
    {
      header: 'Репо',
      translateCode: '',
      link: '',
      active: false
    },
    {
      header: 'ГЦБ',
      translateCode: '',
      link: '',
      active: false
    },
    {
      header: 'Ин. валюты',
      translateCode: '',
      link: '',
      active: false
    },
    {
      header: 'Операции валютного свопа',
      translateCode: '',
      link: '',
      active: false
    }
  ]

  public membersCols: any[] = MembersCols;
  public memberValues: MembersValuesInterface = {
    orders: 'string',
    page: 0,
    records: [],
    size: 0,
    totalPages: 0,
    totalRecords: 0
  };
  public membersColsSetting = MembersColsSettings;
  public membersValuesSetting = MembersValuesSettings;

  public activityCols: any[] = ActivityRankingCols;
  public activityValues: ActivityValuesInterface[] = [];
  public activityColsSetting = ActivityRankingColsSettings;
  public activityValuesSetting = ActivityRankingValuesSettings;

  public diplomaValues: any[] = [
    {
      header: 'Андеррайтер года',
      items: [
        {
          header: 'На рынке копроративных облигаций',
          content: 'Фридом Финанс',
          link: '#'
        }
      ]
    },
    {
      header: 'Лидер рынка',
      items: [
        {
          header: 'Акций',
          content: 'Фридом Финанс',
          link: '#'
        },
        {
          header: 'Корпоративных облигаций',
          content: 'Фридом Финанс',
          link: '#'
        },
        {
          header: 'Государственных ценных бумаг',
          content: 'Фридом Финанс',
          link: '#'
        },
        {
          header: 'Иностранных валют',
          content: 'АО "Ситибанк Казахстан"',
          link: '#'
        }
      ]
    }
  ];


  constructor(private http: HttpClient) {
  }

  start() {
    this.setCurrentTab(this.tabs[0].link);

    this.requestOrganizationsFull();
    this.requestOrganizations();

    // test data
    for (let i = 0; i < 5; i++) {
      this.activityValues.push({
        kase_member: 'Altyn Bank',
        ka: '3,80',
        v: '3,80',
        n: '3,80',
        d: '3,80',
        a: '3,80'
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

  getMarket(value: string, array: any[]) {
    return array.includes(value);
  }

  requestOrganizationsFull() {
    console.log('requestOrganizationsFull')

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
      })
    }
    this.http.get<any>(environment.rest_url + 'organisations/full', httpOptions).subscribe({
      next: data => {
        console.log(data);
      },
      error: error => {
        console.log('error: ' + error.message);
      }
    });
  }

  requestOrganizations() {
    console.log('requestOrganizations')

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
      })
    }
    this.http.get<any>(environment.rest_url + 'organisations', httpOptions).subscribe({
      next: data => {
        this.memberValues = {
          orders: data.orders,
          page: data.page,
          records: data.records.map( (data: any) => {
              return {
                name: data.name,
                siteLink: data.siteLink,
                currency: data.markets.toString().toLowerCase().includes('currency'),
                stock: data.markets.toString().toLowerCase().includes('stock'),
                derivatives: data.markets.toString().toLowerCase().includes('derivatives')
              }
            },
          ),
          size: data.size,
          totalPages: data.totalPages,
          totalRecords: data.totalRecords
        }
        console.log(this.memberValues);
      },
      error: error => {
        console.log('error: ' + error.message);
      }
    });
    // return this.http.get(environment.rest_url+'organisations', httpOptions)
    //   .pipe(filter(data => data === 'records'),
    //   map(data => {
    //     console.log(data)
    //   }))
  }

  // subscribeOrganizations(stompClient: CompatClient) {
  //   const _this = this;
  //   stompClient.connect(
  //     {}, function (frame: any) {
  //       _this.subscriptionMembers = stompClient?.subscribe("/organizations", tick => {
  //         let temp = JSON.parse(tick.body);
  //         console.log(temp)
  //         _this.memberValues.records.push({
  //           name: temp.name,
  //           siteLink: temp.siteLink,
  //           currency: _this.getMarket('currency', temp.markets),
  //           stock: _this.getMarket('stock', temp.markets),
  //           derivatives: _this.getMarket('derivatives', temp.markets)
  //         })
  //       })
  //     }
  //   )
  // }

  end() {
  }

}
