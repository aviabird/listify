import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import { Restangular } from 'ng2-restangular';
import { SuggestedList, UserList } from '../models';

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

  createSuggestedListsObj(response){
    var suggLists = []
    response.forEach(element => {
      var attr = {id: element.id, name: element.name, description: element.description, image_url: element.image_url}
      var suggestedList = new SuggestedList(attr)
      suggLists.push(suggestedList);
    });
    return suggLists;
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

  getListTimeLine(indexId){
    var token = this.getServerToken()
    var attr = { index_id: indexId };
    return this.restAngular
      .all('users/list_timeline')
      .post(attr, {}, { 'Authorization': token })
  }

}
