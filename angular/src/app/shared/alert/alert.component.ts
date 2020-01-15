import { Component, OnInit, OnDestroy } from "@angular/core";
import { AlertService } from "src/app/services/alert.service";
import { Subscription } from "rxjs";

@Component({
  selector: "alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"]
})
export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  message: any;

  constructor(private alertservice: AlertService) {}

  ngOnInit() {
    this.subscription = this.alertservice.getAlert().subscribe(message => {
      switch (message && message.type) {
        case "success":
          message.cssClass = "alert alert-success";
          break;
        case "error":
          message.cssClass = "alert alert-danger";
          break;
      }
      this.message = message;
    });
  }

  removeAlert() {
    this.alertservice.clear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
