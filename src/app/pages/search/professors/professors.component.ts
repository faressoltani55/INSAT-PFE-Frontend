import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/utils/models/Professor';
import { ProfessorService } from '../../../services/professor.service';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.css']
})
export class ProfessorsComponent implements OnInit {

  professors: Professor[];
  loading: boolean;
  p: number;
  
  constructor(private professorService: ProfessorService) { }

  ngOnInit(): void {
    this.loading = false;
    this.p = 1;

    this.getProfessors();
  }

  getProfessors(): void {
    this.loading = true;
    this.professorService.getAllProfessors().subscribe((data) => {
      console.log(data);
      this.professors = data;
      this.loading = false;
    });
  }
}
