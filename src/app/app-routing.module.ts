import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigningComponent } from './authentication/signin/signing.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { AuthGuard } from './services/guards/auth.guard';
import {PagesComponent} from './pages/pages/pages/pages.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages/pages.module')
      .then(m => m.PagesModule),
  },
  { path: 'signin',
    component: SigningComponent
  },
  { path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
