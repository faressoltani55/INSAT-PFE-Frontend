import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  public displayAccepted = false;
  public displayRefused = false;

  constructor(private socket: Socket) {
  }

  startListing(): void {
    this.socket.on('notif', (data: any) => {
      if (data.accepted) { this.displayAccepted = true; }
      if (!data.accepted) { this.displayRefused = true; }

      console.log(data);
    });
  }
}
