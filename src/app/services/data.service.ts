import {Injectable} from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: Http) {
  }

  getCityData(cityName): Promise<AirbnbData> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    const data = 'location=' + cityName.trim() + '&_limit=20&_offset=0&client_id=3092nxybyb0otqw18e8nh5nty';

    return this.http.get('https://api.airbnb.com/v2/search_results?' + data, {headers: headers}).map((response: Response) => {
      const callback = response.json();
      const airbnbData: AirbnbData = {search_results: callback.search_results, metadata: callback.metadata};
      return airbnbData;
    }).toPromise();
  }

  getListingData(cityName, listingId): Promise<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    const data = 'location=' + cityName.trim() + '&_limit=20&_offset=0&client_id=3092nxybyb0otqw18e8nh5nty';

    return this.http.get('https://api.airbnb.com/v2/search_results?' + data, {headers: headers}).map((response: Response) => {
      const callback = response.json();
      for (const list of callback.search_results) {
        if (list.listing.id == listingId) {
          return list;
        }
      }
    }).toPromise();
  }

  getListingReviews(listingId): Promise<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    const data = 'listing_id=' + listingId.trim() + '&role=all&client_id=3092nxybyb0otqw18e8nh5nty';

    return this.http.get('https://api.airbnb.com/v2/reviews?' + data, {headers: headers}).map((response: Response) => {
      const callback = response.json();
      return callback;
    }).toPromise();
  }

}

export interface AirbnbData {
  metadata: any;
  search_results: any;
}
