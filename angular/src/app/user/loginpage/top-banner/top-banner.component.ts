import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-top-banner",
  templateUrl: "./top-banner.component.html",
  styleUrls: ["./top-banner.component.scss"]
})
export class TopBannerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  title: string = "We love working with Businesses ";
  subtitle: string =
    "We believe that our products can help organizations meet the challenges of rapid technological change. If you would like to include Packt in your catalogue and help us to help your customers, you can apply to become a trade reseller – you’ll receive priority information on our latest and hottest titles ";
}
