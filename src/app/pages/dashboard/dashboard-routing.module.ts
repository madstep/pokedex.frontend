import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { PokedexListComponent } from '../modules/pokedex/list/pokedexList.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:[
      
      { path: 'Pokedex/List', component: PokedexListComponent },
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class DashboardRoutingModule {}
