import { Component, OnInit } from '@angular/core';
import {SocketService} from '../../services/socket/socket.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-pfe-notification',
  templateUrl: './pfe-notification.component.html',
  styleUrls: ['./pfe-notification.component.css']
})
export class PfeNotificationComponent implements OnInit {

  msg: string;

  constructor(public socketService: SocketService,
              private router: Router) { }

  ngOnInit(): void {
  }

  clickNotification(): void {
    this.socketService.displayRefused = false;
    this.socketService.displayAccepted = false;
    this.router.navigate(['calendar']);
  }
}
