import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../../services/guards/auth.guard';
import {PagesComponent} from './pages/pages.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full',
      },
      { path: 'home',
        canActivate: [AuthGuard],
        data: {role: 'STUDENT'},
        loadChildren: () => import('../home/home.module').then(mod => mod.HomeModule)
      },
      { path: 'search',
        canActivate: [AuthGuard],
        loadChildren: () => import('../search/search.module').then(mod => mod.SearchModule)
      },
      { path: 'calendar',
        canActivate: [AuthGuard],
        loadChildren: () => import('../calendar/calendar.module').then(mod => mod.CalendarModule)
      },
      { path: 'profile',
        canActivate: [AuthGuard],
        loadChildren: () => import('../profile/profile.module').then(mod => mod.ProfileModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
