import { FETCH_ALL_WORKERS, FETCH_WORKER, REGISTER_WORKER } from '../actions/types';

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
        default:
            return state
    }

}