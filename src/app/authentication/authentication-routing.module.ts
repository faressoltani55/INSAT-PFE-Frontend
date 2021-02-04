import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigningComponent} from './signin/signing.component';
import {SuccessComponent} from './success/success.component';

const routes: Routes = [
  {
    path: '',
    component: SigningComponent
  },
  {
    path: 'success',
    component: SuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
