import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaxisService{
	constructor(private http:Http) {
		console.log("Taxi Service Initialized");
	}

	getTaxi() {
		let headers = new Headers({'api-key':'GGUCCXv7YZa51re2PVQRH1JDTGB5dB73'});
    	let options = new RequestOptions({headers: headers})
    	return this.http.get('https://api.data.gov.sg/v1/transport/taxi-availability?date_time=2016-04-05T09%3A45%3A00',
    		options)
            .map(res => res.json());
	}
}

