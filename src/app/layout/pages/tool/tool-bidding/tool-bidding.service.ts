import { Injectable } from '@angular/core';
import {TabsInterface} from "@shared/interfaces/tabs-interface";
import {SummaryDataValuesInterface} from "@layout/pages/tool/tool-bidding/table-cols/summary_data-values-interface";
import {summaryDataCols} from "@layout/pages/tool/tool-bidding/table-cols/summary-data-cols";
import {TableNewsValuesInterface} from "@shared/interfaces/table-news-values-interface";

@Injectable({
  providedIn: 'root'
})
export class ToolBiddingService {

  public tabs: TabsInterface[] = [
    {
      header: 'Сводные данные',
      translateCode: '',
      link: '',
      active: false
    },
    {
      header: 'Последние данные сделок',
      translateCode: '',
      link: '',
      active: false
    }
  ]

  public tabsSec: TabsInterface[] = [
    {
      header: 'Архив',
      translateCode: '',
      link: '',
      active: false
    },
    {
      header: 'Текущий день',
      translateCode: '',
      link: '',
      active: false
    }
  ]

  summaryDataValues: SummaryDataValuesInterface[] = [
    {
      dateOrPeriod: '29.09.21 (16:27)',
      bid: '48 250,00',
      offer: '48 250,00',
      last: '48 250,00',
      w_aver: '48 250,00',
      high: '48 250,00',
      low: '48 250,00',
      trade: '61',
      shared: '548',
      m_kzt: '25,5',
      th_usd: '60,3'
    },
    {
      dateOrPeriod: '29.09.21 (16:27)',
      bid: '48 250,00',
      offer: '48 250,00',
      last: '48 250,00',
      w_aver: '48 250,00',
      high: '48 250,00',
      low: '48 250,00',
      trade: '61',
      shared: '548',
      m_kzt: '25,5',
      th_usd: '60,3'
    },
    {
      dateOrPeriod: '29.09.21 (16:27)',
      bid: '48 250,00',
      offer: '48 250,00',
      last: '48 250,00',
      w_aver: '48 250,00',
      high: '48 250,00',
      low: '48 250,00',
      trade: '61',
      shared: '548',
      m_kzt: '25,5',
      th_usd: '60,3'
    },
  ];

  summaryDataCols: any[] = summaryDataCols;

  tableNewsValues: TableNewsValuesInterface[] = [
    {
      dateOrPeriod: '23.09.21 09:09',
      title: 'Акционеры АО "Kaspi Bank" приняли решение о выплате дивидендов по простым и привилегированным акциям за второй квартал 2021 года'
    },
    {
      dateOrPeriod: '23.09.21 09:09',
      title: 'Акционеры АО "Kaspi Bank" приняли решение о выплате дивидендов по простым и привилегированным акциям за второй квартал 2021 года'
    },
    {
      dateOrPeriod: '23.09.21 09:09',
      title: 'Акционеры АО "Kaspi Bank" приняли решение о выплате дивидендов по простым и привилегированным акциям за второй квартал 2021 года'
    },
    {
      dateOrPeriod: '23.09.21 09:09',
      title: 'Акционеры АО "Kaspi Bank" приняли решение о выплате дивидендов по простым и привилегированным акциям за второй квартал 2021 года'
    },
    {
      dateOrPeriod: '23.09.21 09:09',
      title: 'Акционеры АО "Kaspi Bank" приняли решение о выплате дивидендов по простым и привилегированным акциям за второй квартал 2021 года'
    },
    {
      dateOrPeriod: '23.09.21 09:09',
      title: 'Акционеры АО "Kaspi Bank" приняли решение о выплате дивидендов по простым и привилегированным акциям за второй квартал 2021 года'
    },
    {
      dateOrPeriod: '23.09.21 09:09',
      title: 'Акционеры АО "Kaspi Bank" приняли решение о выплате дивидендов по простым и привилегированным акциям за второй квартал 2021 года'
    },
  ]


  constructor() { }
}
