import {TabsInterface} from "@shared/interfaces/tabs-interface";

export const MarketsValues: {
  header: string,
  menuList: TabsInterface[]
}[] = [
  {
    header: 'Фондовый рынок',
    menuList: [
      {
        header: 'Акции и ADR/GDR',
        translateCode: '',
        link: '',
        active: false
      },
      {
        header: 'KASE Global',
        translateCode: '',
        link: '',
        active: false
      },
      {
        header: 'ЦБ инвестиционных фондов',
        translateCode: '',
        link: '',
        active: false
      },
      {
        header: 'Корпоративные ценные бумаги',
        translateCode: '',
        link: '',
        active: false
      },
      {
        header: 'Государственные ценные бумаги',
        translateCode: '',
        link: '',
        active: false
      },
      {
        header: 'Ценные бумаги МФО',
        translateCode: '',
        link: '',
        active: false
      },
    ]
  },
  {
    header: 'Денежный рынок',
    menuList: [
      {
        header: 'Репо',
        translateCode: '',
        link: '',
        active: false
      },
      {
        header: 'Свопы',
        translateCode: '',
        link: '',
        active: false
      }
    ]
  },
  {
    header: 'Валютный рынок',
    menuList: [
      {
        header: 'Иностранные валюты',
        translateCode: '',
        link: '',
        active: false
      }
    ]
  },
  {
    header: 'Рынок деривативов',
    menuList: [
      {
        header: 'Фондовые',
        translateCode: '',
        link: '',
        active: false
      },
      {
        header: 'Валютные',
        translateCode: '',
        link: '',
        active: false
      }
    ]
  }
]
