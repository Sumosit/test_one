import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FinancialToolsComponent } from './financial-tools.component';
import {promotionCols} from "@layout/pages/financial-tools/table-cols/promotion-cols";

describe('FinancialToolsComponent', () => {
  let component: FinancialToolsComponent;
  let fixture: ComponentFixture<FinancialToolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [FinancialToolsComponent]
    });
    fixture = TestBed.createComponent(FinancialToolsComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`promotionCols has default value`, () => {
    expect(component.promotionCols).toEqual(promotionCols);
  });

  it(`pathTree has default value`, () => {
    expect(component.pathTree).toEqual([
      {
        name: 'Торги'
      },
      {
        name: 'Финансовые инструменты'
      }]);
  });

  it(`filterValues has default value`, () => {
    expect(component.filterValues).toEqual([]);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'connect').and.callThrough();
      component.ngOnInit();
      expect(component.connect).toHaveBeenCalled();
    });
  });

  describe('ngOnDestroy', () => {
    it('makes expected calls', () => {
      spyOn(component, 'disconnect').and.callThrough();
      component.ngOnDestroy();
      expect(component.disconnect).toHaveBeenCalled();
    });
  });
});
