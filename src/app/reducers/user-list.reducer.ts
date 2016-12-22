import { Action } from '@ngrx/store';
import { UserList } from '../models/';
import { ActionTypes } from '../actions/suggestions.actions';

export type State = {
  ids: string[];
  entities: { [id: string]: UserList };
}

const initialState: State = {
  ids: [],
  entities: {}
};

export default function(state = initialState, action: Action): State {
    switch(action.type){
      case ActionTypes.FOLLOW_LIST_SUCCESS: {
        let userList = action.payload;

          return Object.assign({}, state, {
            entities: Object.assign({}, state.entities,
                                    {[userList.id]: userList}
                                  ),
            ids: [ ...state.ids, userList.id ]
          })
      }
      default: {
        return state;
      }
    }
}

export const getIds = (state: State) => state.ids;
export const getEntities = (state: State) => state.entities;