import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/global-components/header/header.component';
import { FooterComponent } from './components/global-components/footer/footer.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { NavbarComponent } from './components/global-components/navbar/navbar.component';
import { SigninComponent } from './authentication/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
