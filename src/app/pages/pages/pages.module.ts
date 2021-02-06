import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';

import {HeaderComponent} from '../../components/global-components/header/header.component';
import {FooterComponent} from '../../components/global-components/footer/footer.component';
import {NavbarComponent} from '../../components/global-components/navbar/navbar.component';
import {PfeNotificationComponent} from '../../components/pfe-notification/pfe-notification.component';
import {PagesRoutingModule} from './pages-routing.module';

@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    PfeNotificationComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
