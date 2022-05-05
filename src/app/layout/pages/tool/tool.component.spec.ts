import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ToolService } from '@layout/pages/tool/tool.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToolComponent } from './tool.component';

describe('ToolComponent', () => {
  let component: ToolComponent;
  let fixture: ComponentFixture<ToolComponent>;

  beforeEach(() => {
    const toolServiceStub = () => ({
      setCurrentTab: (paramCode: any, paramTab: any) => ({}),
      tabs: [{ link: 'specifications' }]
    });
    const activatedRouteStub = () => ({ snapshot: { params: {} } });
    const routerStub = () => ({ navigate: (array: any) => ({}) });
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ToolComponent],
      providers: [
        { provide: ToolService, useFactory: toolServiceStub },
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Router, useFactory: routerStub }
      ]
    });
    fixture = TestBed.createComponent(ToolComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const toolServiceStub: ToolService = fixture.debugElement.injector.get(
        ToolService
      );
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(toolServiceStub, 'setCurrentTab').and.callThrough();
      spyOn(routerStub, 'navigate').and.callThrough();
      component.ngOnInit();
      expect(toolServiceStub.setCurrentTab).toHaveBeenCalled();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });
});
