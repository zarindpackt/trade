import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
    MatMenuModule,
    MatButtonModule,
} from '@angular/material';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
      HttpModule,
      MatMenuModule,
      ReactiveFormsModule,
      MatButtonModule
    ],
    exports:[
        FormsModule,
      HttpClientModule,
      HttpModule,
      MatMenuModule,
      ReactiveFormsModule,
      MatButtonModule
    ],
    declarations: [],
  })
  export class SharedModule {}