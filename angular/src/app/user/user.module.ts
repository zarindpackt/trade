import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import {
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginpageComponent } from './loginpage/loginpage.component';
import { TopBannerComponent } from './loginpage/top-banner/top-banner.component';
import { PlaceholdersComponent } from './loginpage/placeholders/placeholders.component';
import { LoginSignupFormComponent } from './loginpage/login-signup-form/login-signup-form.component';
import { RegistrationComponent } from './loginpage/registration/registration.component';

@NgModule({
  declarations: [
    LoginpageComponent,
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
    LoginpageComponent,
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
export class UserModule { }
