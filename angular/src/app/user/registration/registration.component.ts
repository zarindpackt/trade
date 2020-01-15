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
import { MustMatch } from "src/app/helpers/customvalidator";
import { AlertService } from "src/app/services/alert.service";

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
    private alertservice: AlertService
  ) {
    //if already logged in
    if (this.authservice.currentUserValue) {
      this.router.navigate(["/welcome"]);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        title: [null, Validators.required],
        firstName: new FormControl(null, [
          Validators.required,
          Validators.pattern("^[a-zA-Z ]*$")
        ]),
        lastName: new FormControl(null, [
          Validators.required,
          Validators.pattern("^[a-zA-Z ]*$")
        ]),
        businessName: new FormControl(null, [Validators.required]),
        phoneNumber: new FormControl(null, [
          Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.maxLength(10),
          Validators.minLength(10)
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(6)
        ]),
        confirmpassword: new FormControl(null, [Validators.required]),
        address_line_1: new FormControl(null, [Validators.required]),
        address_line_2: new FormControl(),
        country: new FormControl(null, [Validators.required]),
        town_city: new FormControl(null, [Validators.required]),
        postcode: new FormControl(null, [
          Validators.required,
          Validators.pattern("^[0-9]*$")
        ]),
        vat_gst: new FormControl(null, [
          Validators.required,
          Validators.pattern("^[0-9]*$")
        ]),
        ship_address_line_1: new FormControl(null, [Validators.required]),
        ship_address_line_2: new FormControl(),
        ship_town_city: new FormControl(null, [Validators.required]),
        ship_country: new FormControl(null, [Validators.required]),
        ship_postcode: new FormControl(null, [
          Validators.required,
          Validators.pattern("^[0-9]*$")
        ]),
        ship_phoneNumber: new FormControl(null, [
          Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.maxLength(10),
          Validators.minLength(10)
        ])
      },
      {
        validator: MustMatch("password", "confirmpassword")
      }
    );
  }

  get formControls() {
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
          this.alertservice.success("Registration successful", true);
          this.router.navigate(["/login"], {
            queryParams: { registered: true }
          });
        },
        error => {
          this.alertservice.error(error);
        }
      );
    alert("SUCCESS!!" + JSON.stringify(this.registerForm.value));
  }
}
