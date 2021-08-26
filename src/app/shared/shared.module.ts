import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



import { AuditComponent } from './components/audit/audit.component';
import { LogComponent } from './components/log/list/log.component';
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  declarations: [
    AuditComponent,LogComponent
  ],
  providers:[
  ],
  exports:[AuditComponent,LogComponent]

})
export class  SharedModule { }
