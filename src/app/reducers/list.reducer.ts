import { Action } from '@ngrx/store';
import { List } from '../models/';
import { ActionTypes } from '../actions/list.actions';

export type State = {
  ids: string[];
  entities: { [id: string]: List };
}

const initialState: State = {
  ids: [],
  entities: {}
}

export default function(state = initialState, action: Action): State {
    switch(action.type){
        case ActionTypes.RETRIVE_LISTS_SUCCESS: {
          const Lists: List[] = action.payload;
          
          const newLists: List[] = Lists
            .filter(list => !state.entities[list.id]);
          
          const newListIds = Lists
                              .filter(list => !state.entities[list.id])
                              .map(list => list.id);
          
          const newEntities = newLists
            .reduce((entities: { [id: string]: List }, list: List) => {
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
