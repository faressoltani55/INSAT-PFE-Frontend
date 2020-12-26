import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './authentication/signin/signin.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { AuthGuard } from './services/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'signin', 
    component: SigninComponent
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
  { path: '**',
    component: NotFoundComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
