import { NgModule,ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from "./interceptors";
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from './shared/shared.module';
import { PipesModule } from './shared/pipes/pipes.module';

import { AuthenticationService } from './services/general/authentication.service'
import { SessionStorageService } from './services/storage/storage-service';
import { UtilityService } from './services/general/utility.service';
import { ConfigService } from './services/general/config.service';
import { AppConfig } from './app.config';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    SharedModule,
    PipesModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,

  ],
  providers: [
    httpInterceptorProviders,
    AppConfig,
    AuthenticationService,
    SessionStorageService,
    UtilityService,
    ConfigService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
