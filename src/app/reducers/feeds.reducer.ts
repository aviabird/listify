import { Action } from '@ngrx/store';
import { Tweet } from '../models/';
import { ActionTypes } from '../actions/feeds.actions';

export type State = {
  ids: string[];
  entities: { [id: string]: Tweet };
  selectedUserListId: string;
  selectedFeedId: string;
}

const initialState: State = {
  ids: [],
  entities: {},
  selectedUserListId: null,
  selectedFeedId: null
}

export default function(state = initialState, action: Action): State {
  switch(action.type){
    
    case ActionTypes.GET_FEEDS_FOR_ID_SUCCESS: {
      const tweets: Tweet[] = action.payload
       const newTweets: Tweet[] = tweets.filter(tweet => !state.entities[tweet.id]);

       const newTweetIds = tweets.map(tweet => tweet.id); 

       const newEntities = newTweets
        .reduce((entities: { [id: string]: Tweet }, tweet: Tweet) => {
          return Object.assign(entities, { [tweet.id]: tweet }) 
        }, {});

        return Object.assign({}, state, {
          ids: [...state.ids, ...newTweetIds],
          entities: Object.assign({}, state.entities, newEntities)
        })
    }

    case ActionTypes.GET_ALL_FEEDS_SUCCESS: {
      const tweets: Tweet[] = action.payload
        const newTweets: Tweet[] = tweets.filter(tweet => !state.entities[tweet.id]);

        const newTweetIds = tweets.map(tweet => tweet.id); 

        const newEntities = newTweets
        .reduce((entities: { [id: string]: Tweet }, tweet: Tweet) => {
          return Object.assign(entities, { [tweet.id]: tweet }) 
        }, {});

        return Object.assign({}, state, {
          ids: [...state.ids, ...newTweetIds],
          entities: Object.assign({}, state.entities, newEntities)
        })
    }

    case ActionTypes.SELECT_FEED: {
      return Object.assign({}, state, {
        selectedFeedId: action.payload
      });
    }

    default: {
      return state;
    }
  }
}

export const getIds = (state: State) => state.ids;
export const getEntities = (state: State) => state.entities;
export const getSelectedUserListId = (state: State) => state.selectedUserListId;
export const getSelectedFeedId = (state: State) => state.selectedFeedId;