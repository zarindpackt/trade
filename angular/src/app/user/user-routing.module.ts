import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './loginpage/registration/registration.component';
import { LoginSignupFormComponent } from './loginpage/login-signup-form/login-signup-form.component';


const routes: Routes = [
  //{ path: 'login-sign', component: LoginSignupFormComponent },
  { path: 'register', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
