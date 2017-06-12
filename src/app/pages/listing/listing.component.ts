import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers: [DataService]
})
export class ListingComponent implements OnInit {
  cityName;
  listing;
  listingId;
  reviews;

  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) {
  }

  ngOnInit() {
    this.cityName = this.route.snapshot.params['cityName'];
    this.listingId = this.route.snapshot.params['listingId'];
    this.data.getListingData(this.cityName, this.listingId).then(callback => {
      this.listing = callback;
      console.log(callback);
    });
    this.data.getListingReviews(this.listingId).then(callback => {
      this.reviews = callback;
      console.log(callback);
    });
  }
}
