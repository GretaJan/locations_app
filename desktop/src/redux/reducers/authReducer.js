import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL } from '../actions/types';

const initialState = {
    admin: {},
    token: '',
    login_error: '',
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                admin: action.adminProfile,
                token: action.token,
            }
        case LOGIN_FAIL:
            return {
                ...state,
                token: action.token,
                error: action.error
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                token: action.adminToken,
                admin: action.error
            }
        case LOGOUT_FAIL:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}