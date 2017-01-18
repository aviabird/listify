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
    var token = this.getServerToken()
    return this.restAngular.all('lists/suggest')
            .post(null, {}, { 'Authorization': token })
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

  addToFav(feedId: any): any {
    var token = this.getServerToken()
    var favoritedFeedId = { feedId: feedId }
    return this.restAngular.all('tweets/add_tweet_to_fav')
      .post(favoritedFeedId, {}, {'Authorization': token});
  }

  removeFromFav(feedId: any): any {
    var token = this.getServerToken()
    var favoritedFeedId = { feedId: feedId }
    return this.restAngular.all('tweets/remove_tweet_from_fav')
      .post(favoritedFeedId, {}, {'Authorization': token});
  }

}
