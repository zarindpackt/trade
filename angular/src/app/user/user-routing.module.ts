import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegistrationComponent } from "./registration/registration.component";
import { LoginSignupFormComponent } from "./login-signup-form/login-signup-form.component";

export const routes: Routes = [
  { path: "loginpage", component: LoginSignupFormComponent },
  { path: "register", component: RegistrationComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })
  ],
  exports: [RouterModule]
})
export class UserRoutingModule {}
