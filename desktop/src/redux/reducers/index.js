import { combineReducers } from 'redux';
import authReducer from './authReducer';
import workersReducer from './workersReducer';

export default combineReducers({
    authorization: authReducer,
    workers: workersReducer,
})