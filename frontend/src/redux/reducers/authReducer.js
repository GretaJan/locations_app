import { 
    LOG_IN_ADMIN, 
    LOG_IN_WORKER, 
    LOGIN_ERROR, 
    LOG_OUT, 
    LOG_OUT_ERROR 
} from '../actions/types';

initialState = {
    adminToken: {},
    adminProfile: {},
    workerToken: {},
    workerProfile: {},
    isAdmin: false,
    isWorker: false,
    error: '',
    logout_error: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LOG_IN_ADMIN:
            return {
                ...state,
                adminToken: action.adminToken,
                adminProfile: action.adminProfile,
            }
        case LOG_IN_WORKER:
            return {
                ...state,
                workerToken: action.workerToken,
                workerProfile: action.workerProfile
            }
        case LOGIN_ERROR:
            return {
                ...state,
                error: action.error
            }
        case LOG_OUT:
            return {
                ...state,
                workerToken: {},
                workerProfile: {},
                adminToken: {},
                adminProfile: {}
            }
        case LOG_OUT_ERROR:
            return {
                ...state,
                logout_error: action.error
            }
        default:
            return state
    }
}