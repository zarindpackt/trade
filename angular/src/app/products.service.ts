import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { handleError } from '@packt/angular-sdk';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductSummary } from '../ProductSummary';
import { ProductJSON } from '../ProductJSON';
import { ProductAuthor } from '../ProductAuthor';
import { ProductChapters } from '../ProductChapters';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable()
export class ProductsService {
  private staticAuthorsURL: string;
  private staticProductsURL: string;
  private staticFreeLearningURL: string;

  constructor(
    private http: HttpClient,

  ) {
    const staticCDNUrl = environment.staticCdnUrl;
    this.staticAuthorsURL = `${staticCDNUrl}/authors`;
    this.staticProductsURL = `https://static-dev.packt-cdn.com/products`
    this.staticFreeLearningURL = `https://static-dev.packt-cdn.com/free-learning`
  }
  /**
   * Sends the request to get the product summary information from the static CDN
   *
   * @param {string} productId
   * @return {Observable<ProductSummary>}
   */
  getProductSummary(productId: string): Observable<ProductSummary> {
    const urlForProductSummary = `${this.staticProductsURL}/${productId}/summary`
    return this.http.get<ProductSummary>(urlForProductSummary)
      .pipe(
        tap((el) => {
          // console.log(el)
        },
          (err) => { console.error(err) },
          () => {
            //  console.log("Complete")
            }
        ),
      )
  }

  getChapters(productId: string) {
    const urlForToc = `${this.staticProductsURL}/${productId}/toc`;
    return this.http.get<ProductChapters>(urlForToc);
  }


  /**
   * Send the request to get an author's details based on their ID
   *
   * @param {string} authorId
   * @return {Observable<ProductAuthor>}
   */
  getProductAuthor(authorId: string): Observable<ProductAuthor> {
    return this.http.get(`${this.staticAuthorsURL}/${authorId}`)
      .pipe(
        catchError(handleError),
      );
  }

  /* gets product from JSON file
* @params productData object
* return Promise
*/
  getProductFromJSON(productId) {
    const url = `${this.staticFreeLearningURL}/${productId}`;
    return this.http.get<ProductJSON>(url)
  };

}
