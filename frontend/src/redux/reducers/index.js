import { combineReducers } from 'redux';
import authReducer from './authReducer';
import adminReducer from './adminReducer';
import workerReducer from './workerReducer';

export default combineReducers({
    authorization: authReducer,
    admin: adminReducer,
    worker: workerReducer,
});