import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth.routes'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent, 
    LogoutComponent, 
    ResetPwdComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(authRoutes)
  ]
})
export class AuthModule { }
