import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.scss']
})
export class WelcomepageComponent implements OnInit {
  currentUser: any;
  users: any[];
  constructor(
    private authservice: AuthService,
  ) { 
    this.currentUser = this.authservice.currentUserValue;
    console.log(this.currentUser);
  }

  ngOnInit() {
  }

  title  :string = "Welcome";
}
