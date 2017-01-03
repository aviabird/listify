import { Action } from '@ngrx/store';
import { SuggestedList } from '../models/';
import { ActionTypes } from '../actions/suggestions.actions';

export type State = {
  ids: string[];
  entities: { [id: string]: SuggestedList };
}

const initialState: State = {
  ids: [],
  entities: {}
}

export default function(state = initialState, action: Action): State {
    switch(action.type){
        case ActionTypes.RETRIVE_LISTS_SUCCESS: {
          const Lists: SuggestedList[] = action.payload;
          
          const newLists: SuggestedList[] = Lists
            .filter(list => !state.entities[list.id]);
          
          const newListIds = Lists.map(list => list.id);
          
          const newEntities = newLists
            .reduce((entities: { [id: string]: SuggestedList }, list: SuggestedList) => {
                return Object.assign(entities, {
                  [list.id]: list
                });
            }, {});

          return Object.assign({} , state, {
            ids: [ ...state.ids, ...newListIds ],
            entities: Object.assign({}, state.entities, newEntities)
          })
        }
        
        default: {
            return state;
        }
    }
}

export const getIds = (state: State) => state.ids;
export const getEntities = (state: State) => state.entities;
