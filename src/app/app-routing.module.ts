import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VerificationPageComponent } from './verification-page/verification-page.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SuccessPasswordComponent } from './success-password/success-password.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AddAttendanceComponent } from './add-attendance/add-attendance.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'verify', 
    component: VerificationPageComponent
  },
  { 
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  { 
    path: 'success-password', 
    component: SuccessPasswordComponent
  },
  { 
    path: 'profile', 
    component: ProfileComponent 
  },
  { 
    path: 'forget-password', 
    component: ForgetPasswordComponent
  },
  {
    path: 'add-attendance',
    component: AddAttendanceComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }


