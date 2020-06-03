import { combineReducers } from 'redux';
import authReducer from './authReducer';
import adminReducer from './adminReducer';

export default combineReducers({
    authReducer: authReducer,
    admin: adminReducer,
});