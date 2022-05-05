import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ToolService } from './tool.service';

describe('ToolService', () => {
  let service: ToolService;

  beforeEach(() => {
    const routerStub = () => ({ navigate: (array: any) => ({}) });
    TestBed.configureTestingModule({
      providers: [ToolService, { provide: Router, useFactory: routerStub }]
    });
    service = TestBed.inject(ToolService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it(`pathTree has default value`, () => {
    expect(service.pathTree).toEqual([
      {
        name: 'Торги'
      },
      {
        name: 'Финансовые инструменты'
      }
    ]);
  });

  it(`tabs has default value`, () => {
    expect(service.tabs).toEqual([
      {
        header: 'Характеристика ценной бумаги',
        translateCode: '',
        link: 'specifications',
        active: false
      },
      {
        header: 'Торги',
        translateCode: '',
        link: 'bidding',
        active: false
      }
    ]);
  });
});
