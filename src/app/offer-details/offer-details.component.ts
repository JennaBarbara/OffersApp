import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { Product } from '../types'

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {
  @Input() product: Product = <Product>{};
  @Input() selected: boolean = false;

  @Output() onToggleOffer = new EventEmitter<Number>();
  @Output() onCloseOffer = new EventEmitter<Number>();
  constructor(
  ) { }

  ngOnInit(): void { }

  toggleOfferSelection(): void {
    this.onToggleOffer.emit();
  }

  closeOfferDetails(): void {
    this.onCloseOffer.emit();
  }
}
