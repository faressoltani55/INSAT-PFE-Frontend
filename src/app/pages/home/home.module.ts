import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import {SearchModule} from "../search/search.module";
import {ProfessorComponentsModule} from "../../components/professor-components/professor-components.module";
import {StudentComponentsModule} from "../../components/student-components/student-components.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    HttpClientModule,
    SearchModule,
    ProfessorComponentsModule,
    StudentComponentsModule
  ],
})
export class HomeModule { }
