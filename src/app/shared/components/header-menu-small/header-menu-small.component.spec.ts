import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ModalPositionService } from '@shared/services/modal-position.service';
import { HeaderMenuSmallComponent } from './header-menu-small.component';

describe('HeaderMenuSmallComponent', () => {
  let component: HeaderMenuSmallComponent;
  let fixture: ComponentFixture<HeaderMenuSmallComponent>;

  beforeEach(() => {
    const modalPositionServiceStub = () => ({
      modalOn: (id: string, width: number, height: number, screenWidth: number, screenHeight: number) => ({
        x: {},
        y: {}
      })
    });
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [HeaderMenuSmallComponent],
      providers: [
        { provide: ModalPositionService, useFactory: modalPositionServiceStub }
      ]
    });
    fixture = TestBed.createComponent(HeaderMenuSmallComponent);
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

  it(`menu has default value`, () => {
    expect(component.menu).toEqual([
      {
        header: 'Просмотр торгов',
        translateCode: 'Просмотр торгов',
        link: '/',
        active: false
      },
      {
        header: 'Регламент торгов и клиринга',
        translateCode: 'Регламент торгов и клиринга',
        link: '/',
        active: false
      },
      {
        header: 'Финансовые инструменты',
        translateCode: 'Финансовые инструменты',
        link: '/',
        active: false
      },
      {
        header: 'Члены Биржи',
        translateCode: 'Члены Биржи',
        link: '/',
        active: false
      },
      {
        header: 'Технологии',
        translateCode: 'Технологии',
        link: '/',
        active: false
      },
    ]);
  });

  describe('modalOn', () => {
    it('makes expected calls', async(() => {
      const modalPositionServiceStub: ModalPositionService = fixture.debugElement.injector.get(
        ModalPositionService
      );

      component.itemHeader = 'itemHeader';
      fixture.detectChanges();
      spyOn(modalPositionServiceStub, 'modalOn').and.callThrough();
      let button = fixture.debugElement.nativeElement.querySelector('.hms-header');
      button.click();

      fixture.whenStable().then(() => {
        expect(modalPositionServiceStub.modalOn).toHaveBeenCalled();
      })
    }));
  });
});
