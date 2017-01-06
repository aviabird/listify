import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import { Restangular } from 'ng2-restangular';
import { List, UserList, Tweet, User } from '../models';

var BASE_URL: string = environment.baseUrl;

@Injectable()
export class ApiService {

  constructor(private http: Http, public restAngular: Restangular) { }

  retriveSuggestion(): Observable<any> {
    return this.restAngular.all('lists/suggest').post()
  }

  followList(listId: string): Observable<any> {
    var token = this.getServerToken()
    var ListId = { id: listId }
    return this.restAngular.all('users/create_list')
      .post(ListId, {}, { 'Authorization': token })
  }

  getServerToken(): any {
    return localStorage.getItem('server_token');
  }

  getListsTimeLine(indexId: any): Observable<any> {
    var token = this.getServerToken()
    var attr = { index_id: indexId };
    return this.restAngular
      .all('users/list_timeline')
      .post(attr, {}, { 'Authorization': token })
  }

  getUserLists(): Observable<any> {
    var token = this.getServerToken()
    return this.restAngular
      .all('users/user_list')
      .post(null, {}, {'Authorization': token});
  }

  getUserDetail(): Observable<any>{ 
    var token = this.getServerToken()
    return this.restAngular.all('users/user_detail')
      .post(null, {}, {'Authorization': token});
  }

  all_feeds(): any {
    var token = this.getServerToken()
    return this.restAngular.all('users/all_feeds')
      .post(null, {}, {'Authorization': token});
  }


  unFollowList(listId: string): Observable<any>{
    var token = this.getServerToken()
    var ListId = { id: listId }
    return this.restAngular.all('users/unfollow_list')
      .post(ListId, {}, {'Authorization': token});
  }
}
