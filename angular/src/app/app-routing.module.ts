import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginpageComponent } from './user/loginpage/loginpage.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

const routes: Routes = [
  { path: '', component: LoginpageComponent, canActivate: [AuthGuard] },
    { path: 'loginpage', component: LoginpageComponent },
    { path: 'welcome', component: WelcomepageComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
