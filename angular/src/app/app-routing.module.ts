import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth.guard";
import { WelcomepageComponent } from "./welcomepage/welcomepage.component";
import { LoginSignupFormComponent } from "./user/login-signup-form/login-signup-form.component";
import { RegistrationComponent } from "./user/registration/registration.component";
import { UserModule } from "./user/user.module";

const routes: Routes = [
  { path: "", component: LoginSignupFormComponent, pathMatch: "full" },
  { path: "welcome", component: WelcomepageComponent,canActivate: [AuthGuard] },
  { path: "register", component: RegistrationComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
