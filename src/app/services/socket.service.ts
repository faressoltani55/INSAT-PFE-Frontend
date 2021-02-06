import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  public displayAccepted = false;
  public displayRefused = false;
  private msg = '';

  constructor(private socket: Socket) {
  }

  startListing(): void {
    this.socket.on('notif', (data: any) => {
      if (data.accepted){
        this.displayAccepted = true;
      } else {
        this.displayRefused = true;
      }
      this.msg = data.msg;
    });
  }

  getMsg(): string {
    return this.msg;
  }
}
