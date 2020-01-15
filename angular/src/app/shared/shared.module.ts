import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule
} from "@angular/material";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { AlertComponent } from "./alert/alert.component";

@NgModule({
  declarations: [HeaderComponent, FooterComponent, AlertComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    HeaderComponent,
    FooterComponent,
    AlertComponent
  ]
})
export class SharedModule {}
