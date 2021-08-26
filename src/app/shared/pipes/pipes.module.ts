import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { Time24to12Format } from './time24to12.pipe';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  declarations: [
    Time24to12Format
  ],
  providers:[
  ],
  exports:[Time24to12Format]

})
export class  PipesModule { }
