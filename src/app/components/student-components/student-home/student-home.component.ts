import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  submitted: boolean;
  constructor() { }

  ngOnInit(): void {
    //should actually check database to see if a subject was submitted
    this.submitted = false
  }

}
