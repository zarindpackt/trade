import { NgModule,PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogsService } from './logs.service';

import { isPlatformBrowser } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { HomepageComponent } from './homepage/homepage.component';
import {SharedModule} from './shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopBannerComponent } from './homepage/top-banner/top-banner.component';
import { PlaceholdersComponent } from './homepage/placeholders/placeholders.component';
import { LoginSignupFormComponent } from './homepage/login-signup-form/login-signup-form.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    TopBannerComponent,
    PlaceholdersComponent,
    LoginSignupFormComponent,
    WelcomepageComponent
  ],
  providers: [LogsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
