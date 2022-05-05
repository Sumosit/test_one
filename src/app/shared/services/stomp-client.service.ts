import { Injectable } from '@angular/core';
import {environment} from "@environment/environment";
import {CompatClient, Stomp} from "@stomp/stompjs";

@Injectable({
  providedIn: 'root'
})
export class StompClientService {

  private stompClient: CompatClient | undefined

  constructor() { }

  connectToSockJs() {
    let socket = environment.sockjs_url;
    this.stompClient = Stomp.client(socket);
    this.stompClient.heartbeat.outgoing = 5000;
    this.stompClient.heartbeat.incoming = 5000;
    this.stompClient.reconnect_delay = 5000;
    return this.stompClient;
  }

  getSockJs(): CompatClient {
    return <CompatClient>this.stompClient;
  }

  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }
  }

}
