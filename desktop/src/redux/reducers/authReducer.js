import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL } from '../actions/types';
const db = require('../../database/db');

const initialState = {
    admin: {},
    token: null,
    authorized: false,
    login_error: '',
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                admin: action.payload,
                token: action.token,
                authorized: action.authorized
            }
        case LOGIN_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                token: action.token,
                admin: action.payload
            }
        case LOGOUT_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}