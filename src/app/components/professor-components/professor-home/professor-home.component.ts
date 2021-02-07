import { Component, OnInit } from '@angular/core';
import { SujetService } from 'src/app/services/sujet.service';
import { Subject } from 'src/app/utils/models/Subject';

@Component({
  selector: 'app-professor-home',
  templateUrl: './professor-home.component.html',
  styleUrls: ['./professor-home.component.css']
})
export class ProfessorHomeComponent implements OnInit {

  pfeSubjectsWhereRequestedAsProfessor
  constructor( private sujetService: SujetService) { }

  ngOnInit(): void {
    this.sujetService.getSubjectByRequestedProfessor(localStorage.getItem('user')).subscribe((data) => {
      console.log(data)
      this.pfeSubjectsWhereRequestedAsProfessor = data
    }
    )
  }

}
