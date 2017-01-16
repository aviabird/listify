import { Action } from '@ngrx/store';
import { UserList } from '../models/';
import { ActionTypes  as ListActionTypes }from '../actions/list.actions';
import { ActionTypes as UserListActions } from '../actions/user-list.actions';

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
      case ListActionTypes.FOLLOW_LIST_SUCCESS: {
        let userList = action.payload;

          return Object.assign({}, state, {
            entities: Object.assign({}, state.entities,
                                    {[userList.id]: userList}
                                  ),
            ids: [ ...state.ids, userList.id ]
          })
      }
      case UserListActions.GET_USER_LISTS_SUCCESS: {
        
        const UserLists: UserList[] = action.payload;
        const newUserLists: UserList[] = UserLists
          .filter(list => !state.entities[list.id])

        const newUserListIds = UserLists
                                .filter(userList => !state.entities[userList.id])
                                .map(list => list.id);

        const newEntities = newUserLists
          .reduce((entities: { [id: string]: UserList }, userList: UserList) => {
            return Object.assign(entities, {[userList.id]: userList});
          }, {})
        
        return Object.assign({}, state, {
          ids: [...state.ids, ...newUserListIds],
          entities: Object.assign({}, state.entities, newEntities)
        })
      }
      case ListActionTypes.UNFOLLOW_LIST_SUCCESS: {
        const userListId: string = action.payload;
        const newIds = state.ids.filter(val => val != userListId);
        const newEntities = newIds.reduce((entities: { [id: string]: UserList }, id: string) => {
          return Object.assign(entities, {
              [id]: state.entities[id]
            });
        }, {});

        return Object.assign({}, state,  {
          entities: newEntities,
          ids: newIds
        })
      } 

      default: {
        return state;
      }
    }
}

export const getIds = (state: State) => state.ids;
export const getEntities = (state: State) => state.entities;