import { Action } from '@ngrx/store';
import { SuggestedList } from '../models/';
import { ActionTypes } from '../actions/user.actions';

export type SuggestedListState = SuggestedList[];

const initialState: SuggestedListState = [];

export default function(state = initialState, action: Action): SuggestedListState {
    switch(action.type){
        default: {
            return state;
        }
    }
}