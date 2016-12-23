import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import { Restangular } from 'ng2-restangular';
import { SuggestedList, UserList, Tweet } from '../models';

var BASE_URL: string = environment.baseUrl;

@Injectable()
export class ApiService {

  constructor(private http: Http, public restAngular: Restangular) { }

  retriveSuggestion(): Observable<any> {
    return this.restAngular.all('lists/suggest').post()
  }

  followList(list_id): Observable<any> {
    var token = this.getServerToken()
    var ListId = { id: list_id }
    return this.restAngular.all('users/create_list')
      .post(ListId, {}, { 'Authorization': token })
  }

  getServerToken(){
    return localStorage.getItem('server_token');
  }

  createUserListobj(dbUserListobj){
    var attr = {id: dbUserListobj.id,
                list_id: dbUserListobj.list_id,
                twitter_list_id: dbUserListobj.twitter_list_id,
                slug: dbUserListobj.slug,
                name: dbUserListobj.name
               }
    var userList: UserList = new UserList(attr);
    return userList;
  }

  createSuggestedListsObj(response){
    var suggLists = []
    response.forEach(element => {
      var attr = {id: element.id, name: element.name, description: element.description, image_url: element.image_url}
      var suggestedList = new SuggestedList(attr)
      suggLists.push(suggestedList);
    });
    return suggLists;
  }

  createUserListsobj(dbUserListsobj){
    var userLists = []; 
    dbUserListsobj.forEach(element => {
      var attr = {id: element.id,
                list_id: element.list_id,
                twitter_list_id: element.twitter_list_id,
                slug: element.slug,
                name: element.name
      }
      var userList = new UserList(attr);
      userLists.push(userList);
    });
    return userLists;
  }

  getListsTimeLine(indexId){
    var token = this.getServerToken()
    var attr = { index_id: indexId };
    return this.restAngular
      .all('users/list_timeline')
      .post(attr, {}, { 'Authorization': token })
  }

  createTweetsObj(dbTweetsObj){
    var tweets = []; 
    dbTweetsObj.forEach(element => {
      var attr = {id: element.id, text: element.text}
      var tweet = new Tweet(attr)
      tweets.push(tweet);
    });
    return tweets;
  }

  getUserLists(){
    var token = this.getServerToken()
    return this.restAngular
      .all('users/user_list')
      .post(null, {}, {'Authorization': token});
  }
}
