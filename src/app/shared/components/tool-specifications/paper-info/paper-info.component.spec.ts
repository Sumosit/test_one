import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperInfoComponent } from './paper-info.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('PaperInfoComponent', () => {
  let component: PaperInfoComponent;
  let fixture: ComponentFixture<PaperInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaperInfoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
