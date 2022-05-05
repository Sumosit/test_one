import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { TableNewsComponent } from './table-news.component';

describe('TableNewsComponent', () => {
  let component: TableNewsComponent;
  let fixture: ComponentFixture<TableNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [TableNewsComponent]
    });
    fixture = TestBed.createComponent(TableNewsComponent);
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
});
