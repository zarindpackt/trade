import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  useful_links = [
    { title: "About Us", link: "#link" },
    { title: "Our Authors", link: "#link" },
    { title: "Press", link: "#link" },
    { title: "Privacy Policy", link: "#link" },
    { title: "View our cookie policy", link: "#link" }
  ];
  help_supports = [
    { title: "Support Home", link: "#link" },
    { title: "Frequently Asked Questions", link: "#link" },
    { title: "Orders & Purchases", link: "#link" },
    { title: "Code Download & Errata", link: "#link" },
    { title: "Frequently Asked Questions", link: "#link" }
  ];
  socials = [
    { icon: "fa fa-facebook-official", link: "#link" },
    { icon: "fa fa-twitter", link: "#link" },
    { icon: "fa fa-linkedin", link: "#link" },
    { icon: "fa fa-youtube-play", link: "#link" },
    { icon: "fa fa-github", link: "#link" }
  ];

  copyright: string =
    "The word 'Packt' and the Packt logo are registered trademarks belonging to Packt Publishing Limited. All rights reserve";
}
