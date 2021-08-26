import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { IndividualAccountRegisterComponent } from './createAccount/register/individual/individualAccountRegister.component';
import { NumberVerificationRegisterAccountComponent } from './createAccount/verify/number/numberVerificationRegisterAccount.component';
import { CodeVerificationRegisterAccountComponent } from './createAccount/verify/code/codeVerificationRegisterAccount.component';
import { EmailVerificationChangePasswordComponent } from './recoveryPassword/verify/email/emailVerificationChangePassword.component';
import { CodeVerificationChangePasswordComponent } from './recoveryPassword/verify/code/codeVerificationChangePassword.component';
import { ChangePasswordComponent } from './recoveryPassword/change/changePassword.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'RegisterIndividual',
    component: IndividualAccountRegisterComponent,
  },
  {
    path: 'RegisterVerifyNumber',
    component: NumberVerificationRegisterAccountComponent,
  },
  {
    path: 'RegisterVerifyCode',
    component: CodeVerificationRegisterAccountComponent,
  },
  {
    path: 'RecoveryPasswordVerifyEmail',
    component: EmailVerificationChangePasswordComponent
  },
  {
    path: 'RecoveryPasswordVerifyCode',
    component: CodeVerificationChangePasswordComponent
  },
  {
    path: 'RecoveryPasswordChange',
    component: ChangePasswordComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class AuthenticationRoutingModule {}
