import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PfeListingComponent } from './pfe-listing/pfe-listing.component';
import { PfeSubjectCardComponent } from './pfe-subject-card/pfe-subject-card.component';
import { PfeSearchComponent } from './pfe-search/pfe-search.component';
import { PfeSoutenanceCardComponent } from './pfe-soutenance-card/pfe-soutenance-card.component';
import { PfeSoutenanceCalendarComponent } from './pfe-soutenance-calendar/pfe-soutenance-calendar.component';
import { PfeSearchBarComponent } from './pfe-search-bar/pfe-search-bar.component';
import { PfeSearchFilterComponent } from './pfe-search-filter/pfe-search-filter.component';



@NgModule({
  declarations: [PfeListingComponent, PfeSubjectCardComponent, PfeSearchComponent, PfeSoutenanceCardComponent, PfeSoutenanceCalendarComponent, PfeSearchBarComponent, PfeSearchFilterComponent],
  imports: [
    CommonModule
  ]
})
export class PfeModule { }
