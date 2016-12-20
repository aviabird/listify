import { Action } from '@ngrx/store';
import { SuggestedList } from '../models/';
import { ActionTypes } from '../actions/suggestions.actions';

export type SuggestedListState = SuggestedList[];

const initialState: SuggestedListState = [];

export default function(state = initialState, action: Action): SuggestedListState {
    switch(action.type){
        case ActionTypes.RETRIVE_LISTS_SUCCESS: {
          var suggestedLists: SuggestedListState = action.payload;
          return Object.assign([] , state, suggestedLists)
        }
        default: {
            return state;
        }
    }
}