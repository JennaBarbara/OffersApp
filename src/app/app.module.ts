import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { SelectOffersComponent } from './select-offers/select-offers.component';

@NgModule({
  declarations: [
    AppComponent,
    OfferDetailsComponent,
    SelectOffersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
