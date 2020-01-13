import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { first } from "rxjs/operators";
import { MustMatch } from 'src/app/helpers/customvalidator';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  title = "Registration for Trade Account";

  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthService,
    private router: Router,
    private userService: UserService,
    private alertservice : AlertService
  ) {
    //if already logged in
    if (this.authservice.currentUserValue) {
      this.router.navigate(["/welcome"]);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmpassword: ["", Validators.required]
      },
      {
        validator:  MustMatch('password', 'confirmpassword')
      }
    );
  }

  get formControls() {
    //console.log(this.registerForm.controls, "here is form data");
    return this.registerForm.controls;
  }
  
  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    this.userService
      .register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertservice.success('Registration successful', true);
          this.router.navigate(["/login"], {
            queryParams: { registered: true }
          });
        },
        error => {
          this.alertservice.error(error);
        }
      );
      alert('SUCCESS!!' + JSON.stringify(this.registerForm.value))
  }
}
