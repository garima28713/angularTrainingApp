import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { ListingComponent } from './listing/listing.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';

const routes: Routes = [
  { path: '', component: ListingComponent },
  { path: 'shop-details/:id', component: ShopDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
