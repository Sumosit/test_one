import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {ModalPositionService} from "@shared/services/modal-position.service";

export interface checkboxes {
  checkboxes: {}
}

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss']
})
export class FilterButtonComponent implements OnInit {

  public screenWidth: any;
  public screenHeight: any;
  public show = false;
  public x = 0;
  public y = 0;
  @Output() filterValues: any = new EventEmitter<string>();

  public mainSite = {
    header: 'Основная площадка',
    translateCode: '',
    types: [
      {
        header: 'Акции',
        translateCode: '',
        categories: [
          {
            header: 'категория “Премиум”',
            headerView: 'Акции категории "Премиум" основной площадки',
            translateCode: '',
            active: false
          },
          {
            header: 'категория “Стандарт”',
            headerView: 'Акции категории "Стандарт" основной площадки',
            translateCode: '',
            active: false
          },
        ]
      },
      {
        header: 'Долговые ценные бумаги',
        translateCode: '',
        categories: [
          {
            header: 'категория “Облигации”',
            headerView: 'Категория "Облигации" основной площадки',
            translateCode: '',
            active: false
          },
          {
            header: 'категория “Коммерческие облигации”',
            headerView: 'Категория "Коммерческие облигации" основной площадки',
            translateCode: '',
            active: false
          },
        ]
      },

    ],
  }

  public alternativeSite = {
    header: 'Альтернативная площадка',
    translateCode: '',
    types: [
      {
        header: '',
        translateCode: '',
        categories: [
          {
            header: 'Акции',
            headerView: 'Акции альтернативной площадки',
            translateCode: '',
            active: false
          }
        ]
      },
      {
        header: 'Долговые ценные бумаги',
        translateCode: '',
        categories: [
          {
            header: 'Категория “Коммерческие облигации”',
            headerView: 'Категория "Коммерческие облигации" альтернативной площадки',
            translateCode: '',
            active: false
          },
          {
            header: 'Облигации',
            headerView: 'Категория "Облигации" альтернативной площадки',
            translateCode: '',
            active: false
          },
        ]
      },

    ],
  }

  public otherInstruments = {
    header: 'Другие инструменты',
    translateCode: '',
    types: [
      {
        header: 'Государственные ценные бумаги',
        translateCode: '',
        categories: [
          {
            header: 'Национальный банк РК',
            headerView: 'Национальный банк РК',
            translateCode: '',
            active: false
          },
          {
            header: 'Министерство финансов РК',
            headerView: 'Министерство финансов РК',
            translateCode: '',
            active: false
          },
          {
            header: 'Иностранные эмитенты',
            headerView: 'Иностранные эмитенты',
            translateCode: '',
            active: false
          },
          {
            header: 'Местные исполнительные органы',
            headerView: 'Местные исполнительные органы',
            translateCode: '',
            active: false
          },
          {
            header: 'Ценные бумаги инвестиционных фондов',
            headerView: 'Ценные бумаги инвестиционных фондов',
            translateCode: '',
            active: false
          },
          {
            header: 'Ценные бумаги МФО',
            headerView: 'Категория "Облигации" альтернативной площадки',
            translateCode: '',
            active: false
          },
          {
            header: 'Производные ценные бумаги',
            headerView: 'Производные ценные бумаги',
            translateCode: '',
            active: false
          },
          {
            header: 'Иностранные валюты',
            headerView: 'Иностранные валюты',
            translateCode: '',
            active: false
          },
          {
            header: 'Операции автоматического репо',
            headerView: 'Операции автоматического репо',
            translateCode: '',
            active: false
          },
          {
            header: 'Фьючерсы',
            headerView: 'Фьючерсы',
            translateCode: '',
            active: false
          }
        ]
      }
    ],
  }

  constructor(public modalPositionService: ModalPositionService) {
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  chooseAll() {
    this.mainSite.types.map(x => x.categories.map(y => y.active = true));
    this.alternativeSite.types.map(x => x.categories.map(y => y.active = true));
    this.otherInstruments.types.map(x => x.categories.map(y => y.active = true));
  }

  clearAll() {
    this.mainSite.types.map(x => x.categories.map(y => y.active = false));
    this.alternativeSite.types.map(x => x.categories.map(y => y.active = false));
    this.otherInstruments.types.map(x => x.categories.map(y => y.active = false));
  }

  modalOn() {
    this.show = !this.show;
    if (this.show) {
      let interval = setInterval(() => {
        let temp = this.modalPositionService.modalOn('button1', 'button1', 682, 582, this.screenWidth, this.screenHeight)
        this.x = temp.x;
        this.y = temp.y;
        if (!this.show) {
          clearInterval(interval);
        }
      }, 0)
    }
    return
  }

  submit() {
    let array = [
      this.mainSite, this.alternativeSite, this.otherInstruments
    ];
    this.filterValues.emit(array);
    this.show = false;
  }

  getX() {
    return this.x + 'px';
  }

  getY() {
    return this.y + 'px';
  }

}
