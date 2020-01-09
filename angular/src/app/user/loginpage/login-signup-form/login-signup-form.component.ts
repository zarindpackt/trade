import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Users } from "../../../users";
import { AuthService } from "../../../services/auth.service";
import { first } from 'rxjs/operators';

@Component({
  selector: "app-login-signup-form",
  templateUrl: "./login-signup-form.component.html",
  styleUrls: ["./login-signup-form.component.scss"]
})
export class LoginSignupFormComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  returnUrl: string;
  error: any;

  constructor(
    private authService: AuthService,
    private route : ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    //if already logged in
    if (this.authService.currentUserValue) {
      this.router.navigate(['/welcome']);
  }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log(this.returnUrl);
  }

  get formControls() {
    console.log(this.loginForm.controls, 'here is data');
    return this.loginForm.controls;
  }

  onSubmit(){
    console.log(this.loginForm.value);
    this.isSubmitted= true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.login(this.formControls.email.value,this.formControls.password.value)
    .pipe(first())
    .subscribe(
      data =>{
        this.router.navigate([this.returnUrl]);
      },
      error =>{
        this.error =error;
      }
    ) 

  }

}
