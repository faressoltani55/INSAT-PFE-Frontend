import { Component, OnChanges, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(){}

  role;
  ngOnInit(): void {
    this.role = localStorage.getItem('role');
  }

}
