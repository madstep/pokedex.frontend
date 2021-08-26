import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { IndividualAccountRegisterComponent } from './createAccount/register/individual/individualAccountRegister.component';
import { NumberVerificationRegisterAccountComponent } from './createAccount/verify/number/numberVerificationRegisterAccount.component';
import { CodeVerificationRegisterAccountComponent } from './createAccount/verify/code/codeVerificationRegisterAccount.component';
import { EmailVerificationChangePasswordComponent } from './recoveryPassword/verify/email/emailVerificationChangePassword.component';
import { CodeVerificationChangePasswordComponent } from './recoveryPassword/verify/code/codeVerificationChangePassword.component';
import { ChangePasswordComponent } from './recoveryPassword/change/changePassword.component';


@NgModule({
  declarations: [
    LoginComponent,
    IndividualAccountRegisterComponent,
    NumberVerificationRegisterAccountComponent,
    CodeVerificationRegisterAccountComponent,
    EmailVerificationChangePasswordComponent,
    CodeVerificationChangePasswordComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AuthenticationRoutingModule,
  ],
})
export class AuthenticationModule { }
