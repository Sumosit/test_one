import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ProspectusComponent } from './prospectus.component';

describe('ProspectusComponent', () => {
  let component: ProspectusComponent;
  let fixture: ComponentFixture<ProspectusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ProspectusComponent]
    });
    fixture = TestBed.createComponent(ProspectusComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`tabs has default value`, () => {
    expect(component.tabs).toEqual([
      {
        header: '2022',
        translateCode: '',
        link: 'specifications',
        active: false
      },
      {
        header: '2021',
        translateCode: '',
        link: 'bidding',
        active: false
      },
      {
        header: '2020',
        translateCode: '',
        link: 'bidding',
        active: false
      },
      {
        header: '2019',
        translateCode: '',
        link: 'bidding',
        active: false
      },
      {
        header: '2018',
        translateCode: '',
        link: 'bidding',
        active: false
      },
      {
        header: '2017',
        translateCode: '',
        link: 'bidding',
        active: false
      },
      {
        header: '2016',
        translateCode: '',
        link: 'bidding',
        active: false
      },
    ]);
  });
});
