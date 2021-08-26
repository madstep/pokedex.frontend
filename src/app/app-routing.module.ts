import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404Component} from './pages/error/404/error404.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./pages/authentication/authentication.module').then(mod => mod.AuthenticationModule)
  },
  {
    path: 'Private',
    loadChildren: ()=> import('./pages/dashboard/dashboard.module').then(mod => mod.DashboardModule)
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
