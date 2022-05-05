import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { TableIconsComponent } from './table-icons.component';

describe('TableIconsComponent', () => {
  let component: TableIconsComponent;
  let fixture: ComponentFixture<TableIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [TableIconsComponent]
    });
    fixture = TestBed.createComponent(TableIconsComponent);
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
