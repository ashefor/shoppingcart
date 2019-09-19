import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';

export const authRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'reset-password', component: ResetPwdComponent }
]