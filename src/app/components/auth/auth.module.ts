import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';

@NgModule({
  declarations: [LoginComponent, LogoutComponent, ResetPwdComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
