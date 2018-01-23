import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { HttpClientModule } from '@angular/common/http';
import { Http, Response, Headers,HttpModule, RequestOptions, URLSearchParams,ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
@Injectable()
export class WebService {
    headers: Headers;
    options: RequestOptions;

    constructor(private http: Http) {
        this.headers = new Headers({ "Content-Type" : "application/json", 'Accept' : 'q=0.8;application/json;q=0.9' });
        this.options = new RequestOptions({ headers : this.headers });
    }
    get_items_list() : Observable<any>{
        let header = new Headers();
        header.append('Content-Type',  'application/json; charset=UTF-8');
        return this.http
            .get("http://5a12745f748faa001280a746.mockapi.io/v1/stores/item")
            .map((res : Response) => res.json())
            //...errors if any
            .catch((error : any) => Observable.throw(error.json().error || 'Server error'));
    };
}