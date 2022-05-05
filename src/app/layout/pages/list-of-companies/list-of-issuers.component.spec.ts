import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ListOfIssuersService } from '@layout/pages/list-of-companies/list-of-issuers.service';
import { FormsModule } from '@angular/forms';
import { ListOfIssuersComponent } from './list-of-issuers.component';

describe('ListOfCompaniesComponent', () => {
  let component: ListOfIssuersComponent;
  let fixture: ComponentFixture<ListOfIssuersComponent>;

  beforeEach(() => {
    const listOfCompaniesServiceStub = () => ({
      start: () => ({}),
      getOfficialListValues: () => ({ filter: () => ({}) })
    });
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ListOfIssuersComponent],
      providers: [
        {
          provide: ListOfIssuersService,
          useFactory: listOfCompaniesServiceStub
        }
      ]
    });
    fixture = TestBed.createComponent(ListOfIssuersComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const listOfCompaniesServiceStub: ListOfIssuersService = fixture.debugElement.injector.get(
        ListOfIssuersService
      );
      spyOn(listOfCompaniesServiceStub, 'start').and.callThrough();
      component.ngOnInit();
      expect(listOfCompaniesServiceStub.start).toHaveBeenCalled();
    });
  });

  describe('getOfficialListValues', () => {
    it('makes expected calls', () => {
      const listOfCompaniesServiceStub: ListOfIssuersService = fixture.debugElement.injector.get(
        ListOfIssuersService
      );
      spyOn(
        listOfCompaniesServiceStub,
        'getOfficialListValues'
      ).and.callThrough();
      component.getOfficialListValues();
      expect(
        listOfCompaniesServiceStub.getOfficialListValues
      ).toHaveBeenCalled();
    });
  });
});
