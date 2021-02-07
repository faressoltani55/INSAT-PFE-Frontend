import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorHomeComponent } from './professor-home/professor-home.component';
import { AssociatedSubjectsComponent } from './associated-subjects/associated-subjects.component';
import { StudentRequestsComponent } from './student-requests/student-requests.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProfessorHomeComponent, AssociatedSubjectsComponent, StudentRequestsComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class ProfessorComponentsModule { }
