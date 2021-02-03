import { Component, OnChanges, OnInit } from '@angular/core';
import { Subject } from '../../utils/models/Subject';
import { Student } from '../../utils/models/Student';
import { Entreprise } from 'src/app/utils/models/Entreprise';
import { PfeService } from '../../services/pfe.service';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../../services/student.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subjectInfoComplete: boolean;
  entrepriseInfoComplete: boolean;
  completedRequest: boolean;

  stepOne: boolean;
  stepTwo: boolean;


  subject: Subject;

  constructor(private pfeService: PfeService,
    private studentService: StudentService) { }

  ngOnInit() { 
    this.pfeService.getSubjectByStudent(localStorage.getItem('id')).subscribe( data => {
      if(data){
        this.subject = data;

        this.subjectInfoComplete = false;
        this.entrepriseInfoComplete = false;
        this.completedRequest = true;

        this.stepOne = true;
        this.stepTwo = true;
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
        this.completedRequest = false;

        this.stepOne = false;
        this.stepTwo = false;

      }
    });  
  }

  subjectSubmit() {
    this.subjectInfoComplete = false;
    this.entrepriseInfoComplete = true;
    this.stepTwo = true;
  }

  entrepriseSubmit() {
    this.entrepriseInfoComplete = false;
    this.completedRequest = true;
  }

}
