import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-placeholders",
  templateUrl: "./placeholders.component.html",
  styleUrls: ["./placeholders.component.scss"]
})
export class PlaceholdersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  placeholders = [
    {
      icon: "fa fa-book",
      title: "Bulk Purchases",
      description:
        " If you require more than 5 units for a class, project or conference, please contact us for a quote. We offer deep discounts on bulk purchases of all our titles in both print and eBook format"
    },
    {
      icon: "fa fa-book",
      title: "Account Management",
      description:
        "Open a Trade Account today and start receiving exclusive benefits. With different payment options available, our trade account customers benefit from discounted prices and our online ordering system"
    },
    {
      icon: "fa fa-book",
      title: "Partners",
      description:
        "We implicitly understand the value of working closely with other partners and believe that by connecting and creating strong support networks, we can work together to achieve something great."
    }
  ];
}
