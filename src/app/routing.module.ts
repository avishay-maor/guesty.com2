import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {CityViewComponent} from "./pages/city-view/city-view.component";
import {HomeComponent} from "./pages/home/home.component";
import {ListingComponent} from "./pages/listing/listing.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'city/:cityName', component: CityViewComponent},
  {path: 'city/:cityName/:listingId', component: ListingComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {
}
