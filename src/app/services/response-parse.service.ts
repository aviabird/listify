import { Injectable } from '@angular/core';
import { List, UserList, Tweet, User, Entities, Urls } from '../models';

@Injectable()
export class ResponseParseService {

  constructor() { }

  createUserListobj(dbUserListobj: any): UserList{
    var attr = {id: dbUserListobj.id,
                list_id: dbUserListobj.list_id,
                twitter_list_id: dbUserListobj.twitter_list_id,
                slug: dbUserListobj.slug,
                name: dbUserListobj.name
               }
    var userList: UserList = new UserList(attr);
    return userList;
  }

  createUserListsobj(dbUserListsobj: any): UserList[] {
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

  createSuggestedListsObj(response: any): List[] {
    var suggLists = []
    response.forEach(element => {
      var attr = {id: element.id, name: element.name, description: element.description, image_url: element.image_url}
      var suggestedList = new List(attr)
      suggLists.push(suggestedList);
    });
    return suggLists;
  }


  createTweetsObj(dbTweetsObj: any): Tweet[] {
    var tweets = []; 
    dbTweetsObj.forEach(element => {
      // User
      var dbuser = element.user;
      var user_attr = {
        id: dbuser.id,
        name: dbuser.name,
        screen_name: dbuser.screen_name,
        profile_image_url: dbuser.profile_image_url
      }
      
      // Entities
      var entity = element.entities
      
      var entity_attr = {
        hashtags: <Array<string>>entity.hashtags,
        symbols: <Array<string>>entity.symbols,
        urls: this.retriveUrlObj(entity.urls)
      }

      // Main Tweet
      var attr = {
                  id: element.id,
                  text: element.text,
                  retweet_count: element.retweet_count,
                  favorite_count: element.favorite_count,
                  user: new User(user_attr),
                  entities: new Entities(entity_attr)
                }

      var tweet = new Tweet(attr)
      tweets.push(tweet);
    });
    return tweets;
  }

  retriveUrlObj(urls: Array<any>): Urls[] {
    var urlsObj = [];
    urls.forEach(el => {
      var url_attr = {
                      url: el.url,
                      expanded_url: el.expanded_url,
                      display_url: el.display_url,
                      indices: el.indices
                    }

      var url = new Urls(url_attr)

      urlsObj.push(url)
     }
    )    
    return urlsObj;
  }

  createUserObj(response: any): User {
    var user_detail = response.user_detail
    var attr = {
      id: user_detail.id,
      name: user_detail.name,
      screen_name: user_detail.screen_name,
      profile_image_url: user_detail.profile_image_url,
      description: user_detail.description,
      location: user_detail.location
    }
    var user: User = new User(attr);
    return user;
  }
}
