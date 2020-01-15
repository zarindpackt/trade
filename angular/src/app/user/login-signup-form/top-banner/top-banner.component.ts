import { Component, OnInit } from "@angular/core";
import { ContentfulService } from 'src/app/services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: "app-top-banner",
  templateUrl: "./top-banner.component.html",
  styleUrls: ["./top-banner.component.scss"]
})
export class TopBannerComponent implements OnInit {

  private topBanners: Entry<any>;
  constructor(private contentful : ContentfulService) {}

  ngOnInit() {
    this.contentful.getTopBanner()
    .then(topBanners => this.topBanners = topBanners);
  }
}
