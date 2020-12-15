import { Component, Output, Input, EventEmitter } from '@angular/core';

import { Product } from '../types'

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent{
  @Input() product: Product = <Product>{};
  @Input() selected: boolean = false;

  @Output() onToggleOffer = new EventEmitter();
  @Output() onCloseOffer = new EventEmitter();
  constructor(
  ) { }

  toggleOfferSelection(): void {
    this.onToggleOffer.emit();
  }

  closeOfferDetails(): void {
    this.onCloseOffer.emit();
  }
}
