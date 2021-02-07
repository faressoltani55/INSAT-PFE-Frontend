import { Component, OnInit } from '@angular/core';
import { SujetService } from 'src/app/services/sujet.service';

@Component({
  selector: 'app-associated-subjects',
  templateUrl: './associated-subjects.component.html',
  styleUrls: ['./associated-subjects.component.css']
})
export class AssociatedSubjectsComponent implements OnInit {

  supervisedSubjects
  loading = false;
  p: number = 1;
  
  constructor( private sujetService: SujetService) { }

  ngOnInit(): void {
    this.getSupervisionRequests();
  }

  getSupervisionRequests(): void {
    this.loading = true;
    this.sujetService.getSubjectByProfessor(localStorage.getItem('user')).subscribe((data) => {
      this.supervisedSubjects = data
      this.loading = false;
    })
  }
}
