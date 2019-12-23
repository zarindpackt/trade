import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ProductSummary } from '../../ProductSummary';
import { ProductAuthor } from '../../ProductAuthor';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';


const getChapterDescCapped = (chapterDesc, limit) => {
  let chapterDescCapped = chapterDesc.substr(0, limit);
  chapterDescCapped = chapterDescCapped.substr(0, chapterDescCapped.lastIndexOf(' '));
  return (chapterDesc.length > limit) ? chapterDescCapped += '...' : chapterDesc;

}


@Component({
  selector: 'free-product',
  templateUrl: './free-product.component.html',
  styleUrls: ['./free-product.component.css'],
  providers: [ProductsService],
})

export class FreeProductComponent implements OnInit {
  productSummary: ProductSummary;
  productTitle: string;
  productCover: string;
  productOneLiner: string;
  shortDescription: string;
  relatedTitles: string[];
  isbn13: string;
  authorIds: string[]
  getProductAuthors: any;

  private http: HttpClient;

  staticCdnUrl = environment.staticCdnUrl;
  productAuthors: ProductAuthor[];
  cahptersFromJSON: string[];
  productChapters: string[];
  authorNames: string;
  pageCount: number;
  publicationDate: string;
  features: string;
  readNow: string;
  recommendedTitles: { title: any; summary: any; coverImage: string; }[];

  ngOnInit() {
    this.isbn13 = this.route.snapshot.params.productId;
    this.staticCdnUrl = this.staticCdnUrl;
    this.productsService.getProductFromJSON(this.isbn13)
      .subscribe(
        (response) => {
          this.cahptersFromJSON = response.chapters;
          this.shortDescription = response.shortDescription;
          this.relatedTitles = response.relatedTitle;
          this.getMetaDataRelatedTitles(this.relatedTitles);
        },
        (error) => {
          console.log(error);
        },
      );

    this.productsService.getChapters(this.isbn13)
      .pipe(
        tap((response) => {
          let chapters = response.chapters;
          chapters.forEach((chapter, key) => {
            chapter.outline = this.cahptersFromJSON[key] ? this.cahptersFromJSON[key] : '';
            chapter.outline = getChapterDescCapped(chapter.outline, 300)
          });
        },
          (err) => { console.error(err) },
        ),
      )
      .subscribe((response) => {
        this.productChapters = response.chapters;
      })

    this.productsService.getProductSummary(this.isbn13)
      .subscribe(
        (response) => {
          this.readNow = `https://subscription.packtpub.com${response.readUrl}`;
          this.productTitle = response.title;
          this.productOneLiner = response.oneLiner;
          this.productSummary = response as ProductSummary;
          this.authorIds = response.authors;
          this.pageCount = response.pages;
          this.publicationDate = response.publicationDate;
          this.features = response.features;
          this.getProductAuthorNames();
        },
        (error) => {
          console.log(error);
        },
      );

  }

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
  ) { }


  /**
   * Gets Product Author Names
   */
  getProductAuthorNames() {
    const getAuthorObservables = this.authorIds.map(
      id => this.productsService.getProductAuthor(id),
    );

    forkJoin(getAuthorObservables)
      .subscribe(
        (productAuthors: ProductAuthor[]) => {
          this.productAuthors = productAuthors;
          const authorNames = productAuthors.map(data => data.author);
          const formatAuthorNames = authorNames.join().replace(/,(?=[^,]*$)/, ' and ');
          this.authorNames = formatAuthorNames;
        }
      );
  }

  getMetaDataRelatedTitles(titles) {
    const getTitleObservables = titles.map(
      titleId => this.productsService.getProductSummary(titleId),
    );

    forkJoin(getTitleObservables)
      .subscribe((response) => {
        const titleMetaData = response.map((item: any) => {
          return ({
            title: item.title,
            summary: getChapterDescCapped(item.oneLiner, 150),
            coverImage: `${this.staticCdnUrl}/products/${item.productId}/cover/smaller`,
          });
        });

        this.recommendedTitles = titleMetaData;
      })
  }
}

