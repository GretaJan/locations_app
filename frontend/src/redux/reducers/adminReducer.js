import { FETCH_ALL_WORKERS, FETCH_WORKER } from '../actions/types';

const initialState = {
    workers: [],
    worker: {},
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
        default:
            return state
    }

}