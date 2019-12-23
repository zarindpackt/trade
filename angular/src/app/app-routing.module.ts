import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FreeProductComponent } from './free-product/free-product.component';

const routes: Routes = [
  { path: '', redirectTo: '/free-product/9781788839792', pathMatch: 'full' },
  { path: 'free-product/:productId', component: FreeProductComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
