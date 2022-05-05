import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ActualInformationComponent } from './actual-information.component';

describe('ActualInformationComponent', () => {
  let component: ActualInformationComponent;
  let fixture: ComponentFixture<ActualInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ActualInformationComponent]
    });
    fixture = TestBed.createComponent(ActualInformationComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`cards has default value`, () => {
    expect(component.cards).toEqual([
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
    ]);
  });
});
