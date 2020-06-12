import { 
    FETCH_ALL_WORKERS, 
    FETCH_WORKER, 
    REGISTER_WORKER 
} from '../actions/types';

initialState = {
    workersProfile: [],
    worker: {},
    logout_error: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_ALL_WORKERS:
            return {
                ...state,
                workersProfile: action.workers
            } 
        case FETCH_WORKER:
            return {
                ...state,
                worker: action.worker
            }
        case REGISTER_WORKER:
        return {
            ...state,
            workersProfile: this.workers.concat(action.worker)
        }
        default:
            return state
    }

}