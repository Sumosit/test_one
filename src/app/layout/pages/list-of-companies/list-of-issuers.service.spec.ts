import { TestBed } from '@angular/core/testing';
import { OfficialListCols } from '@layout/pages/list-of-companies/official-list-table/official-list-cols';
import { OfficialListColsSettings } from '@layout/pages/list-of-companies/official-list-table/official-list-cols-settings';
import { OfficialListValuesSettings } from '@layout/pages/list-of-companies/official-list-table/official-list-values-settings';
import { ListOfIssuersService } from './list-of-issuers.service';

describe('ListOfCompaniesService', () => {
  let service: ListOfIssuersService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ListOfIssuersService] });
    service = TestBed.inject(ListOfIssuersService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it(`tabs has default value`, () => {
    expect(service.tabs).toEqual([
      {
        header: 'Официальный список',
        translateCode: '',
        link: 'official-list',
        active: false
      },
      {
        header: 'Нелистинговые',
        translateCode: '',
        link: 'unlisted',
        active: false
      }
    ]);
  });

  it(`officialListCols has default value`, () => {
    expect(service.officialListCols).toEqual(OfficialListCols);
  });

  it(`officialListValues has default value`, () => {
    expect(service.officialListValues).toEqual([]);
  });

  it(`tableColsSettings has default value`, () => {
    expect(service.tableColsSettings).toEqual(OfficialListColsSettings);
  });

  it(`tableValuesSettings has default value`, () => {
    expect(service.tableValuesSettings).toEqual(OfficialListValuesSettings);
  });

  describe('start', () => {
    it('makes expected calls', () => {
      spyOn(service, 'setCurrentTab').and.callThrough();
      service.start();
      expect(service.setCurrentTab).toHaveBeenCalled();
    });
  });
});
