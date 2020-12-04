import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectOffersComponent } from './select-offers/select-offers.component';

const routes: Routes = [
  { path: '', redirectTo: '/offers', pathMatch: 'full' },
  { path: 'offers', component: SelectOffersComponent }
//  { path: 'detail/:id', component: OfferDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
