import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";

import {
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule
} from "@angular/material";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { TopBannerComponent } from "./login-signup-form/top-banner/top-banner.component";
import { PlaceholdersComponent } from "./login-signup-form/placeholders/placeholders.component";
import { LoginSignupFormComponent } from "./login-signup-form/login-signup-form.component";
import { RegistrationComponent } from "./registration/registration.component";

@NgModule({
  declarations: [
    TopBannerComponent,
    PlaceholdersComponent,
    LoginSignupFormComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TopBannerComponent,
    PlaceholdersComponent,
    LoginSignupFormComponent,
    RegistrationComponent,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule {}
