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
    return this.restAngular.all('users/create_list')
      .post(list_id, {}, { 'Authorization': token })
  }

  getServerToken(){
    return localStorage.getItem('server_token');
  }

  createSuggestedListsObj(response){
    var suggLists = []
    response.forEach(element => {
      var suggestedList = new SuggestedList(
                              element._id,
                              element.name, 
                              element.description,
                              element.image_url)
      suggLists.push(suggestedList);
    });
    return suggLists;
  }

  createUserListobj(dbUserListobj){
    var userList: UserList = new UserList(
                                dbUserListobj._id,
                                dbUserListobj.twitter_list_id,
                                dbUserListobj.slug,
                                dbUserListobj.name)
    return userList;
  }


}
