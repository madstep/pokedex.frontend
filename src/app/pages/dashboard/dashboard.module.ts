import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
// Components
import { DashboardComponent } from './dashboard.component';
import { PokedexListComponent } from '../modules/pokedex/list/pokedexList.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PokedexListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DashboardRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatChipsModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule
  ],
})
export class DashboardModule { }
