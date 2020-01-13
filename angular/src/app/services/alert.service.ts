import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject  = new Subject<any>();
  private routechange = false;

  constructor(private router : Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart){
        if(this.routechange){
          this.routechange = false;
        }
        else{
          this.clear();
        }
      }
    });
   }

   getAlert(): Observable<any>{
     return this.subject.asObservable();
   }

   success(message : string, routechange = false){
     this.routechange =routechange;
     this.subject.next({type : 'success', text : message});
     setTimeout(()=>{this.clear()},2000);
   }

   error( message : string, routechange = false){
    this.routechange =routechange;
    this.subject.next({type : 'error', text : message});
    setTimeout(()=>{this.clear()},2000);
  }

  clear(){
    this.subject.next();
  }
}
