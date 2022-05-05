import { Component, OnInit } from '@angular/core';

interface card {
  type: string,
  title: string,
  imageUrl: string
  link: string
}

@Component({
  selector: 'app-actual-information',
  templateUrl: './actual-information.component.html',
  styleUrls: ['./actual-information.component.scss']
})
export class ActualInformationComponent implements OnInit {

  cards: card[] = [
    {
      type: 'Торги',
      title: 'Все финансовые инструменты',
      imageUrl: "url('assets/images/const-svgs/actual-information/frame_1.jpg')",
      link: "/financial-instruments"
    },
    {
      type: 'Торги',
      title: 'Листинговые компании',
      imageUrl: "url('assets/images/const-svgs/actual-information/frame_2.jpg')",
      link: "/#"
    },
    {
      type: 'Торги',
      title: 'Индикаторы фондового рынка',
      imageUrl: "url('assets/images/const-svgs/actual-information/frame_3.jpg')",
      link: "/#"
    },
    {
      type: 'Торги',
      title: 'Результаты торгов за период',
      imageUrl: "url('assets/images/const-svgs/actual-information/frame_4.jpg')",
      link: "/#"
    },
    {
      type: 'Торги',
      title: 'Раскрытие информации компаниями',
      imageUrl: "url('assets/images/const-svgs/actual-information/frame_5.jpg')",
      link: "/#"
    },
    {
      type: 'Торги',
      title: 'Новости рынков и компаний',
      imageUrl: "url('assets/images/const-svgs/actual-information/frame_6.jpg')",
      link: "/#"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
