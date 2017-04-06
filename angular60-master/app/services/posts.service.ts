import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
    constructor(private http: Http){
        console.log('PostsService Initialized...');
    }
    getPosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(res => res.json());
        //let headers = new Headers({'AccountKey': '03wpG+STQMq5+Z+6YgiXKw=='});

    }

    getMoe() {
        return this.http.get('https://data.gov.sg/api/action/package_metadata_show?id=enrolment-moe-kindergartens')
            .map(res => res.json());
    }


    getTaxi() {
    	let headers = new Headers({'api-key':'GGUCCXv7YZa51re2PVQRH1JDTGB5dB73'});
    	let options = new RequestOptions({headers: headers})
    	return this.http.get('https://api.data.gov.sg/v1/transport/taxi-availability?date_time=2016-04-05T09%3A45%3A00',
    		options)
            .map(res => res.json());	
    }
}