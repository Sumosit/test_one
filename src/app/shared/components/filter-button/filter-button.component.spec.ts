import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ModalPositionService } from '@shared/services/modal-position.service';
import { FilterButtonComponent } from './filter-button.component';

describe('FilterButtonComponent', () => {
  let component: FilterButtonComponent;
  let fixture: ComponentFixture<FilterButtonComponent>;

  beforeEach(() => {
    const modalPositionServiceStub = () => ({
      modalOn: (id: string, width: number, height: number, screenWidth: number, screenHeight: number) => ({
        x: {},
        y: {}
      })
    });
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [FilterButtonComponent],
      providers: [
        { provide: ModalPositionService, useFactory: modalPositionServiceStub }
      ]
    });
    fixture = TestBed.createComponent(FilterButtonComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`show has default value`, () => {
    expect(component.show).toEqual(false);
  });

  it(`x has default value`, () => {
    expect(component.x).toEqual(0);
  });

  it(`y has default value`, () => {
    expect(component.y).toEqual(0);
  });

  describe('modalOn', () => {
    it('makes expected calls', async(() => {
      const modalPositionServiceStub: ModalPositionService = fixture.debugElement.injector.get(
        ModalPositionService
      );

      spyOn(modalPositionServiceStub, 'modalOn').and.callThrough();
      let button = fixture.debugElement.nativeElement.querySelector('.modal-filter-button');
      button.click();

      fixture.whenStable().then(() => {
        expect(modalPositionServiceStub.modalOn).toHaveBeenCalled();
      })
    }));
  });
});
