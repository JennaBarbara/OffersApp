import { Component, OnInit } from '@angular/core';

import * as data from '../SampleResponse.json';
import { Product } from '../types'

@Component({
  selector: 'app-select-offers',
  templateUrl: './select-offers.component.html',
  styleUrls: ['./select-offers.component.css']
})
export class SelectOffersComponent implements OnInit {

  products: Product[] = [];
  selectedOffers = new Set();
  currentProduct: Product = <Product>{};


  constructor() { }

  ngOnInit(): void {
    this.products = data.products;
    console.log(this.products);
  }

  toggleOfferSelection(offerID: number): void {
    this.currentProduct = <Product>{};
    if(this.selectedOffers.has(offerID)){
      this.selectedOffers.delete(offerID);
    }
    else{
          this.selectedOffers.add(offerID);
    }
  }

  submitOfferSelection(): void {
    window.location.href = 'http://www.sampler.io';
  }

  seeProductDetails(product: Product): void {
    this.currentProduct = product;
  }

  closeOfferDetails(): void {
    this.currentProduct = <Product>{};
  }


}
