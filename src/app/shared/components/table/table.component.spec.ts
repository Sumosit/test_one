import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [TableComponent]
    });
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`columns has default value`, () => {
    expect(component.columns).toEqual([]);
  });

  it(`values has default value`, () => {
    expect(component.values).toEqual([]);
  });

  it(`columnsSettings has default value`, () => {
    expect(component.columnsSettings).toEqual([]);
  });

  it(`valuesSettings has default value`, () => {
    expect(component.valuesSettings).toEqual([]);
  });
});
