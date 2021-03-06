import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class SigninService {

  // save a reference to the window so we can close it
  externalWindow: Window | null = null;

  constructor(public jwtHelper: JwtHelperService) {
    this.jwtHelper = new JwtHelperService();
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  getUserRole(): string{
    return localStorage.getItem('role');
  }

  setExternalWindow(window: Window | null): void {
    // create an external window
    console.log(window);
    this.externalWindow = window;
  }

  destroyWindow(): void {
    // close the window
    console.log(this.externalWindow);
    if (this.externalWindow){
      this.externalWindow.close();
    }
  }

  saveToken(token: string): void{
    localStorage.setItem('token', token);
  }
}
