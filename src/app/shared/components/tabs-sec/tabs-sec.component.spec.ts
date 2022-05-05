import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { TabsSecComponent } from './tabs-sec.component';

describe('TabsSecComponent', () => {
  let component: TabsSecComponent;
  let fixture: ComponentFixture<TabsSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [TabsSecComponent]
    });
    fixture = TestBed.createComponent(TabsSecComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`tabs has default value`, () => {
    expect(component.tabs).toEqual([]);
  });
});
