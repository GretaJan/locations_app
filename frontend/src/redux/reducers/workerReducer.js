import { 
    FETCH_WORKER_PROFILE, 
    FETCH_WORKER_PROFILE_ERROR, 
    FETCH_LOCATIONS, 
    FETCH_LOCATIONS_ERROR, 
    FETCH_LOCATION, 
    FETCH_LOCATION_ERROR, 
    FETCH_LAST_LOCATIONS, 
    FETCH_LAST_LOCATIONS_ERROR,  
    FETCH_LAST_LOCATION, 
    FETCH_LAST_LOCATION_ERROR 
} from '../actions/types';

initialState = {
    workerCurrently: {},
    WorkerCurrentlyError: '',
    locations: [],
    lastLocations: [],
    locations_error: '',
    last_locations_error: '',
    last_location_error: '',
}

export default function (state = initialState, action) {
    switch(action.type) {
        // case FETCH_WORKER_PROFILE:
        //     return {
        //         ...state,
        //         workerCurrently: action.worker
        //     }
        // case FETCH_WORKER_PROFILE_ERROR:
        //     return {
        //         ...state,
        //         WorkerCurrentlyError: action.error,
        //         workerCurrently: action.worker
        //     }
        case FETCH_LOCATION:
            return {
                ...state,
                location: action.location,
                locations: this.locations.concat(action.location)
            }
        case FETCH_LOCATION_ERROR:
            return {
                ...state,
                location_error: action.error
            }
        case FETCH_LAST_LOCATIONS:
            return {
                ...state,
                lastLocations: action.location,
            }
        case FETCH_LAST_LOCATIONS_ERROR:
            return {
                ...state,
                last_locations_error: action.error
            }
        case FETCH_LAST_LOCATION:
            return {
                ...state,
                lastLocation: action.location,
            }
        case FETCH_LAST_LOCATION_ERROR:
            return {
                ...state,
                last_location_error: action.error
            }
        case FETCH_LOCATIONS:
            return {
                ...state,
                locations: action.locations
            }
        case FETCH_LOCATIONS_ERROR:
            return {
                ...state,
                locations_error: action.error
            }
        default: {
            return state
        }

    }
}
