import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-city-view',
  templateUrl: './city-view.component.html',
  styleUrls: ['./city-view.component.css'],
  providers: [DataService]
})
export class CityViewComponent implements OnInit {
  cityName;
  listing;

  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) {
  }

  ngOnInit() {
    this.cityName = this.route.snapshot.params['cityName'];
    this.data.getCityData(this.cityName).then(callback => {
      console.log(callback);
      this.listing = callback.search_results;
      console.log(callback);
    });
  }

  goTo(listingId) {
    console.log(listingId);
    this.router.navigate(['city/', this.cityName, listingId]);
  }
}
