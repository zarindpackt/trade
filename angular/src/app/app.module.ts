import { NgModule,PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogsService } from './logs.service';

import { isPlatformBrowser } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomepageComponent } from './homepage/homepage.component';
import {SharedModule} from './shared/shared.module';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  providers: [LogsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
