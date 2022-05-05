import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { CompatClient } from '@stomp/stompjs';
import { StompClientService } from '@shared/services/stomp-client.service';
import { ToolSpecificationsComponent } from './tool-specifications.component';

describe('ToolSpecificationsComponent', () => {
  let component: ToolSpecificationsComponent;
  let fixture: ComponentFixture<ToolSpecificationsComponent>;

  beforeEach(() => {
    const stompClientServiceStub = () => ({
      connectToSockJs: () => ({}),
      disconnect: () => ({})
    });
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ToolSpecificationsComponent],
      providers: [
        { provide: StompClientService, useFactory: stompClientServiceStub }
      ]
    });
    fixture = TestBed.createComponent(ToolSpecificationsComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  // describe('subscribeToolSpecifications', () => {
  //   it('makes expected calls', () => {
  //     const compatClientStub: CompatClient = <any>{};
      // component.subscribeToolSpecifications(compatClientStub);
      // compatClientStub.connect();
      // spyOn(compatClientStub, 'connect').and.callThrough();
      // expect(compatClientStub.connect).toHaveBeenCalled();
  //   });
  // });

  // describe('ngOnInit', () => {
  //   it('makes expected calls', () => {
  //     const stompClientServiceStub: StompClientService = fixture.debugElement.injector.get(
  //       StompClientService
  //     );
  //     spyOn(component, 'subscribeToolSpecifications').and.callThrough();
  //     spyOn(stompClientServiceStub, 'connectToSockJs').and.callThrough();
  //     // component.ngOnInit();
  //     // expect(stompClientServiceStub.connectToSockJs).toHaveBeenCalled();
  //     // expect(component.subscribeToolSpecifications).toHaveBeenCalled();
  //   });
  // });

  describe('ngOnDestroy', () => {
    it('makes expected calls', () => {
      const stompClientServiceStub: StompClientService = fixture.debugElement.injector.get(
        StompClientService
      );
      spyOn(stompClientServiceStub, 'disconnect').and.callThrough();
      component.ngOnDestroy();
      expect(stompClientServiceStub.disconnect).toHaveBeenCalled();
    });
  });
});
