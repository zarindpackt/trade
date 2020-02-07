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
import { first, ignoreElements } from "rxjs/operators";
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
  isShow = false;

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
        title:new FormControl([null, Validators.required]),
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
        same: new FormControl(false),
        
        
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
    console.log(this.registerForm.get('same').value);
    this.same();
  }

  same(){
    this.isShow = !this.isShow;
    const ship_address_line_1 = this.registerForm.get('ship_address_line_1');
    const ship_town_city = this.registerForm.get('ship_town_city');
    const ship_country = this.registerForm.get('ship_country');
    const ship_postcode = this.registerForm.get('ship_postcode');
    const ship_phoneNumber = this.registerForm.get('ship_phoneNumber');
    this.registerForm.get('same').valueChanges.subscribe( same =>{
      console.log(this.registerForm.get('same').value,'HERE123');
      if (same === true){
        console.log('im tired!!!');
        ship_address_line_1.setValidators(null);
        ship_town_city.setValidators(null);
        ship_country.setValidators(null);
        ship_postcode.setValidators(null);
        ship_phoneNumber.setValidators(null);
      }
      else{
        ship_address_line_1.setValidators([Validators.required]);
        ship_town_city.setValidators([Validators.required]);
        ship_country.setValidators([Validators.required]);
        ship_postcode.setValidators([
          Validators.required,
          Validators.pattern("^[0-9]*$")
         ]);
        ship_phoneNumber.setValidators([
          Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.maxLength(10),
          Validators.minLength(10)
        ]);
      }
      ship_address_line_1.updateValueAndValidity();
      ship_town_city.updateValueAndValidity();
      ship_country.updateValueAndValidity();
      ship_postcode.updateValueAndValidity();
      ship_phoneNumber.updateValueAndValidity();

    }) ;

    
  }


 
  get formControls() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    if (this.registerForm.valid) {
      console.log(this.registerForm.value); // Process your form
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

  private show : boolean = false;
  private blah : boolean =false;
  isChecked : boolean;

  toggle(event){
     this.show = !this.show;
  }
}
