import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/services/professor.service';
import { StudentService } from 'src/app/services/student.service';
import { SujetService } from 'src/app/services/sujet.service';
import { Entreprise } from 'src/app/utils/models/Entreprise';
import { Student } from 'src/app/utils/models/Student';
import { Subject } from 'src/app/utils/models/Subject';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  subjectInfoComplete: boolean;
  entrepriseInfoComplete: boolean;
  professorRequestComplete: boolean;
  completedRequest: boolean;

  stepOne: boolean;
  stepTwo: boolean;
  stepThree: boolean;


  subject: Subject = new Subject();
  professors: any;
  loading = false;
  constructor(private sujetService: SujetService,
    private studentService: StudentService,
    private professorService: ProfessorService) { }

  ngOnInit() {
    console.log(this.subject);
    this.loading = true;
    this.professorService.getAllProfessors().subscribe(data => {
      this.professors = data;
    });
    this.subject.professorRequested = false;

    const id = localStorage.getItem('user');
    console.log(id);
    this.sujetService.getSubjectByStudent(id).subscribe( data => {
      if (data){
        console.log(data);
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
        this.studentService.getStudent(id).subscribe(student => {
          this.subject.student = student ;
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
      console.log(this.subject);
      this.loading = false;
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
