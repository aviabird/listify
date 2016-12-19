import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import { Restangular } from 'ng2-restangular';

var BASE_URL: string = environment.baseUrl;

@Injectable()
export class ApiService {

  constructor(private http: Http, public restAngular: Restangular) { }

  retriveSuggestion(): Observable<any> {
    return this.restAngular.all('lists/suggest').post();
  }

  followList(list_id): Observable<any> {
    return this.restAngular.all('users/create_list').post(list_id)
  }
}
