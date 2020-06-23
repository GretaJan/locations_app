import { FETCH_WORKERS, FETCH_WORKERS_ERROR, FETCH_WORKERS_EMPTY } from '../actions/types';

const initialState = {
    workers: [],
    emptyArray: '',
    workers_error: '',
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_WORKERS:
            return {
                ...state,
                workers: action.workers
            }
        case FETCH_WORKERS_EMPTY:
            return {
                ...state,
                emptyArray: action.empty
            }
        case FETCH_WORKERS_ERROR:
            return {
                ...state,
                workers_error: action.error
            }
        default:
            return state
    }
}