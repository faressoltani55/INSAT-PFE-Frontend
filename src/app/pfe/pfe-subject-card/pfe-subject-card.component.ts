import { Component, Input, OnInit } from '@angular/core';
import { SujetService } from 'src/app/services/sujet.service';
import { Subject } from 'src/app/utils/models/Subject';

@Component({
  selector: 'app-pfe-subject-card',
  templateUrl: './pfe-subject-card.component.html',
  styleUrls: ['./pfe-subject-card.component.css']
})

export class PfeSubjectCardComponent implements OnInit {

  @Input() id: string;
  subject: Subject;

  constructor(private sujetService: SujetService) { }

  ngOnInit(): void {
  
  this.sujetService.getSujetById(this.id).subscribe((data) => {
    this.subject = data;
    console.log(data)
  });
  }

  acceptRequest(){
  }

  refuseRequest() {
  }
}
