import { FETCH_ALL_USERS } from '../actions/types';

const initialState = {
    users: [],
    user: {},
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_ALL_USERS:
            return {
                ...state,
                users: action.users
            } 
        default:
            return state
    }

}