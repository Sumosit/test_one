import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from '@shared/services/translate-config.service';
import {AboutExchangeValues} from "@core/components/header/values/about-exchange-values";
import {PressCenterValues} from "@core/components/header/values/press-center-values";
import {InformationValues} from "@core/components/header/values/information-values";
import {InvestorsValues} from "@core/components/header/values/investors-values";
import {BiddersValues} from "@core/components/header/values/bidders-values";
import {ListingValues} from "@core/components/header/values/listing-values";
import {MarketsValues} from "@core/components/header/values/markets-values";
import {IndexesValues} from "@core/components/header/values/indexes-values";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public languages: ILan[] = [
    { name: 'English', value: 'en' },
    { name: 'Русский', value: 'ru' },
    { name: 'Қазақ', value: 'kz' }
  ];

  public headerMenuList = [
    {
      header: 'Инвесторам',
      menuList: InvestorsValues
    },
    {
      header: 'Участникам торгов',
      menuList: BiddersValues
    },
    {
      header: 'Листинг',
      menuList: ListingValues
    },
    {
      header: 'Информация',
      menuList: InformationValues
    },
    {
      header: 'Пресс-центр',
      menuList: PressCenterValues
    },
    {
      header: 'О Бирже',
      menuList: AboutExchangeValues
    }
  ]

  public headerMenuBigList = [
    {
      header: 'Рынки',
      menuList: MarketsValues
    },
    {
      header: 'Индексы и индикаторы',
      menuList: IndexesValues
    }
  ]

  public currentLang: ILan = this.languages[1];
  public show = '';


  // constructor(private translateConfigService: TranslateConfigService) { }
  constructor() { }

  ngOnInit(): void {
    // this.getLangChange()
  }

  showHeaderMenuList(value: string) {
    if (this.show === '') {
      this.show = value;
    } else if (this.show !== value && this.show != '') {
      this.show = value;
    } else if (this.show === value) {
      this.show = '';
    }
  }

  // getLangChange() {
    // this.translateConfigService.getLangChange().subscribe(res => {
    //   this.currentLang = this.languages.find(f => f.value === res.lang)!;
    // });
  // }

  // public pickLanguage(item: ILan) {
  //   // this.translateConfigService.changeLanguage(item.value);
  // }

}

interface ILan {
  name: string;
  value: string;
}
