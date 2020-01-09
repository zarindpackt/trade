import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
    private router : Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      const currentUser =this.authService.currentUserValue;
    if(currentUser){
      return true;
    }
    this.router.navigate(['/loginpage'], { queryParams: { returnUrl: state.url }});
        return false;
  }
}
