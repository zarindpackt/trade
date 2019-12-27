import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../../user";
import { AuthService } from "../../auth.service";

@Component({
  selector: "app-login-signup-form",
  templateUrl: "./login-signup-form.component.html",
  styleUrls: ["./login-signup-form.component.scss"]
})
export class LoginSignupFormComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  login(){
    console.log(this.loginForm.value);
    this.isSubmitted= true;
    if(this.loginForm.invalid){
      return;
    }

  this.authService.login(this.loginForm.value);
  this.router.navigateByUrl('/welcome');
  }

}
