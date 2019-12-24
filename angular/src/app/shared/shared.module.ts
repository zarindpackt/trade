import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
MatMenuModule,
MatButtonModule,
MatIconModule,
MatCardModule
} from '@angular/material';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
declarations: [],
imports: [
CommonModule,
  FormsModule,
  HttpClientModule,
  HttpModule,
  MatMenuModule,
  ReactiveFormsModule,
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
    MatCardModule
  ],
})
export class SharedModule { }
