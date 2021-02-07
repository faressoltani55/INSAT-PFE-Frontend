import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {StudentHomeComponent} from "./student-home/student-home.component";
import {SubjectStatusComponent} from "./subject-status/subject-status.component";
import {StudentCardComponent} from "./student-card/student-card.component";
import {AddSubjectComponent} from "./add-subject/add-subject.component";



@NgModule({
  declarations: [
    StudentHomeComponent,
    SubjectStatusComponent,
    StudentCardComponent,
    AddSubjectComponent
  ],
  exports: [
    StudentHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class StudentComponentsModule { }
