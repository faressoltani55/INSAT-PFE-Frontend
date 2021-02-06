import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { ProfessorsComponent } from './professors/professors.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { SoutenancesComponent } from './soutenances/soutenances.component';
import { SujetsComponent } from './sujets/sujets.component';
import { SearchComponent } from './search.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [SearchComponent, ProfessorsComponent, EtudiantsComponent, SoutenancesComponent, SujetsComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    NgxPaginationModule
  ]
})
export class SearchModule { }
