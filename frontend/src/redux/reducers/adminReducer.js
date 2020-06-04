import { FETCH_ALL_WORKERS, FETCH_WORKER, REGISTER_WORKER, LOG_OUT, LOG_OUT_ERROR } from '../actions/types';

initialState = {
    workers: [],
    worker: {},
    logout_error: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_ALL_WORKERS:
            return {
                ...state,
                workers: action.workers
            } 
        case FETCH_WORKER:
            return {
                ...state,
                worker: action.worker
            }
        case REGISTER_WORKER:
        return {
            ...state,
            workers: this.workers.concat(action.worker)
        }
        case LOG_OUT:
        return {
            ...state,
            worker: '',
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