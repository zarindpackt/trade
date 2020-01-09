import { NgModule, PLATFORM_ID, APP_ID, Inject } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";

import { SharedModule } from "./shared/shared.module";
import { WelcomepageComponent } from "./welcomepage/welcomepage.component";
import { UserModule } from "./user/user.module";
import { FakeBackendInterceptor } from "./helpers/fake-backend";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    UserModule,
    ReactiveFormsModule
  ],
  declarations: [AppComponent, WelcomepageComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true
    },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
