import {TabsInterface} from "@shared/interfaces/tabs-interface";

export const IndexesValues: {
  header: string,
  menuList: TabsInterface[]
}[] = [
  {
    header: 'Фондовый рынок',
    menuList: [
      {
        header: 'Акции',
        translateCode: '',
        link: '',
        active: false
      },
      {
        header: 'Корпоративные облигации',
        translateCode: '',
        link: '',
        active: false
      },
      {
        header: 'Государственные ценные бумаги',
        translateCode: '',
        link: '',
        active: false
      }
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
      },
      {
        header: 'Композитный индекс',
        translateCode: '',
        link: '',
        active: false
      }
    ]
  },
  {
    header: 'none',
    menuList: [
      {
        header: 'Индекс деловой активности PMI',
        translateCode: '',
        link: '',
        active: false
      },
      {
        header: 'Все индексы и индикаторы',
        translateCode: '',
        link: '',
        active: false
      }
    ]
  }
]
