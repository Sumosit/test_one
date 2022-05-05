import {Component, OnDestroy, OnInit} from '@angular/core';
import {promotionCols} from "./table-cols/promotion-cols";
import {Stomp, StompSubscription, CompatClient} from '@stomp/stompjs'
import {environment} from "@environment/environment";

@Component({
  selector: 'app-financial-tools',
  templateUrl: './financial-tools.component.html',
  styleUrls: ['./financial-tools.component.scss']
})
export class FinancialToolsComponent implements OnInit, OnDestroy {

  public promotionCols: any[] = promotionCols;
  public promotionValues: any[] = [
    {
      ticker: 'HSBK',
      company: 'HSBK',
      isin: 'KZKD00000519',
      type: 'простая акция',
      board: 'альтернативная',
      sector_category: 'премиум',
      trades: 'премиум',
      t_plus: 'T+'
    },
    {
      ticker: 'ATBS',
      company: 'HSBK',
      isin: 'KZKD00000519',
      type: 'простая акция',
      board: 'альтернативная',
      sector_category: 'премиум',
      trades: 'премиум',
      t_plus: 'T+'
    },
    {
      ticker: 'KSTK',
      company: 'HSBK',
      isin: 'KZKD00000519',
      type: 'простая акция',
      board: 'альтернативная',
      sector_category: 'премиум',
      trades: 'премиум',
      t_plus: 'T+'
    },
    {
      ticker: 'HSBK',
      company: 'HSBK',
      isin: 'KZKD00000519',
      type: 'простая акция',
      board: 'альтернативная',
      sector_category: 'премиум',
      trades: 'премиум',
      t_plus: 'T+'
    },
    {
      ticker: 'HSBK',
      company: 'HSBK',
      isin: 'KZKD00000519',
      type: 'простая акция',
      board: 'альтернативная',
      sector_category: 'премиум',
      trades: 'премиум',
      t_plus: 'T+'
    },
    {
      ticker: 'HSBK',
      company: 'HSBK',
      isin: 'KZKD00000519',
      type: 'простая акция',
      board: 'альтернативная',
      sector_category: 'премиум',
      trades: 'премиум',
      t_plus: 'T+'
    },
    {
      ticker: 'HSBK',
      company: 'HSBK',
      isin: 'KZKD00000519',
      type: 'простая акция',
      board: 'альтернативная',
      sector_category: 'премиум',
      trades: 'премиум',
      t_plus: 'T+'
    },
  ];
  public pathTree: any = [
    {
      name: 'Торги'
    },
    {
      name: 'Финансовые инструменты'
    }
  ]
  public filterValues: any = [];
  public searchCode: string = '';

  private subscription: StompSubscription | any;
  private stompClient: CompatClient | undefined
  private received_messages: any = [];

  constructor() {
  }

  ngOnInit(): void {
    this.connect();
  }

  connect() {
    let socket = environment.sockjs_url;
    this.stompClient = Stomp.client(socket);
    this.stompClient.heartbeat.outgoing = 5000;
    this.stompClient.heartbeat.incoming = 5000;
    this.stompClient.reconnect_delay = 5000;
    const _this = this;
    this.stompClient.connect(
      {}, function (frame: any) {
        _this.subscription = _this.stompClient?.subscribe("/topic/data", tick => {
          _this.received_messages.push(JSON.parse(tick.body));
        })
      }
    )
  }

  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }
  }

  getEmitFilterValues(values: any[]): void {
    this.filterValues = values;
    console.log(this.filterValues);
  }

  getTableValues(value: string): any[] {
    switch (value) {
      case 'Акции категории "Премиум" основной площадки':
        // request or stomp connection
      case 'Акции категории "Стандарт" основной площадки':
        // to do
    }
    if (this.searchCode) {
      return this.promotionValues.filter(x => x.ticker.toLowerCase().includes(this.searchCode));
    }
    if (this.promotionValues) {
      return this.promotionValues;
    }
    return [];
  }

  ngOnDestroy() {
    this.disconnect();
    this.subscription?.unsubscribe();
  }
}
