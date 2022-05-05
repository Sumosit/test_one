import { Component } from '@angular/core';
import {StompClientService} from "@shared/services/stomp-client.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kasekz';

  constructor(private stompClientService: StompClientService) {
    stompClientService.connectToSockJs();
  }
}
