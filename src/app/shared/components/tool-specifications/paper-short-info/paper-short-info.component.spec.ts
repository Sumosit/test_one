import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { PaperShortInfoComponent } from './paper-short-info.component';

describe('PaperShortInfoComponent', () => {
  let component: PaperShortInfoComponent;
  let fixture: ComponentFixture<PaperShortInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [PaperShortInfoComponent]
    });
    fixture = TestBed.createComponent(PaperShortInfoComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
