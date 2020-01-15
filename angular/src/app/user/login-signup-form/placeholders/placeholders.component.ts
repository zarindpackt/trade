import { Component, OnInit } from "@angular/core";
import { ContentfulService } from "src/app/services/contentful.service";
import { Entry } from "contentful";

@Component({
  selector: "app-placeholders",
  templateUrl: "./placeholders.component.html",
  styleUrls: ["./placeholders.component.scss"]
})
export class PlaceholdersComponent implements OnInit {
  constructor(private contentful: ContentfulService) {}

  private placeholders: Entry<any>[] = [];

  ngOnInit() {
    console.log(this.contentful.getPlaceholder());
    this.contentful
      .getPlaceholder()
      .then(placeholders => (this.placeholders = placeholders));
  }
}
