import { Component, OnChanges, OnInit } from '@angular/core';
import { Subject } from '../../utils/models/Subject';
import { Student } from '../../utils/models/Student';
import { Entreprise } from 'src/app/utils/models/Entreprise';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../../services/student.service';
import { ProfessorService } from '../../services/professor.service';
import { SujetService } from '../../services/sujet.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subjectInfoComplete: boolean;
  entrepriseInfoComplete: boolean;
  professorRequestComplete: boolean;
  completedRequest: boolean;

  stepOne: boolean;
  stepTwo: boolean;
  stepThree: boolean;


  subject: Subject;
  professors: any;

  constructor(private sujetService: SujetService,
    private studentService: StudentService,
    private professorService: ProfessorService) { }

  ngOnInit() { 
    this.professorService.getAllProfessors().subscribe(data => {
      this.professors = data;
    });
    this.subject.professorRequested = false;

    
    this.sujetService.getSubjectByStudent(localStorage.getItem('id')).subscribe( data => {
      if(data){
        this.subject = data;

        this.subjectInfoComplete = false;
        this.entrepriseInfoComplete = false;
        this.professorRequestComplete = false;
        this.completedRequest = true;

        this.stepOne = true;
        this.stepTwo = true;
        this.stepThree = true;
      }
      else{
        this.subject = new Subject();
        this.studentService.getStudent(localStorage.getItem('id')).subscribe(data => {
          this.subject.student = data ;
        });
        this.subject.student = new Student();
        this.subject.entreprise = new Entreprise();

        this.subjectInfoComplete = true;
        this.entrepriseInfoComplete = false;
        this.professorRequestComplete = false;
        this.completedRequest = false;

        this.stepOne = false;
        this.stepTwo = false;
        this.stepThree = false;

      }
    });  
  }

  subjectSubmit() {
    this.subjectInfoComplete = false;
    this.entrepriseInfoComplete = true;
    this.stepOne = true;
  }

  entrepriseSubmit() {
    this.entrepriseInfoComplete = false;
    this.professorRequestComplete = true;
    this.stepTwo = true;
  }

  professorSubmit() {
    this.professorRequestComplete = false;
    this.completedRequest = true;
    this.stepThree = true;

    this.sujetService.addSujet(this.subject).subscribe();
  }

  onSelect(prof){
    this.subject.professor = prof;
    this.subject.professorRequested = true;
  }


}
