import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingviewComponent } from './tradingview.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('TradingviewComponent', () => {
  let component: TradingviewComponent;
  let fixture: ComponentFixture<TradingviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingviewComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
