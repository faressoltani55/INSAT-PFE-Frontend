import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigningComponent } from './authentication/signin/signing.component';
import { ProfessorHomeComponent } from './components/professor-components/professor-home/professor-home.component';
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
  { path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule)
  },
  { path: 'search',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/search/search.module').then(mod => mod.SearchModule)
  },
  { path: 'calendar',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/calendar/calendar.module').then(mod => mod.CalendarModule)
  },
  { path: 'profile',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/profile/profile.module').then(mod => mod.ProfileModule)

  },
  { path: 'prof-home',
    component: ProfessorHomeComponent
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
