import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  currentUser: any;
  constructor(private router: Router, private authservice: AuthService) {
    this.authservice.currentUser.subscribe(x => (this.currentUser = x));
  }

  logout() {
    this.authservice.logout();
    this.router.navigate(["/loginpage"]);
  }

  home(){
    this.router.navigate(["/loginpage"]);
  }

  ngOnInit() {}
}
