import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/global-components/header/header.component';
import { FooterComponent } from './components/global-components/footer/footer.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { NavbarComponent } from './components/global-components/navbar/navbar.component';
import { SigningComponent } from './authentication/signin/signing.component';
import { HttpClientModule } from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule} from '@angular/forms';
import {JwtModule, JwtModuleOptions} from '@auth0/angular-jwt';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {PfeNotificationComponent} from './components/pfe-notification/pfe-notification.component';

const configSocket: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

const JWT_Module_Options: JwtModuleOptions = {
  config: {
    tokenGetter: () => {
      return localStorage.getItem('token');
    },
    allowedDomains: ['localhost:3000'],
  }
};

@NgModule({
  declarations: [
    AppComponent,
    SigningComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    SocketIoModule.forRoot(configSocket),
    JwtModule.forRoot(JWT_Module_Options)
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
