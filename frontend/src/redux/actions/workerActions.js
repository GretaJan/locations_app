import { 
    URL, 
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
} from './types';
import axios from 'axios';

// export const fetchWorkerProfile = (id) => dispatch => {
//     axios.get(`${URL}/user`, {headers: {'Authorization' : worker.data.token_type + ' ' + worker.data.access_token}}, {withCredentials: true})
//         .then(response => {
//             console.log('response', response.data.data);
//             dispatch({
//                type: FETCH_WORKER_PROFILE,
//                 worker: response.data.data
//             })
//         }).catch(err => { 
//             console.log('Error: ', err.response);
//             dispatch({
//                 type: FETCH_WORKER_PROFILE_ERROR,
//                 error: err.response,
//                 worker: {}
//              })
//         })

//     axios.post(`${URL}/new_location/${id}`, data)
//         .then(results => {
//             console.log('results', results)
//         })
// }

export const addLocation = (id, data) => {
    axios.post(`${URL}/new_location/${id}`, data)
        .then(results => {
            console.log("results", results.data.data),
            dispatch({
                type: FETCH_LOCATION,
                location: results.data.data
            })
        }).catch(err => {
            console.log("Error: ", err),
            dispatch({
                type: FETCH_LOCATION_ERROR,
                error: err.response
            })
        })
}
export const fetchLocations = (id) => dispatch => {
  axios.get(`${URL}/locations/${id}`)
        .then(results => {
            console.log('results', results)
            dispatch({
                type: FETCH_LOCATIONS,
                locations: results.data.data
            })
        }).catch(err => {
            console.log('Error: ', err)
            dispatch({
                type: FETCH_LOCATIONS_ERROR,
                error: err.response,
            })
    })
}

export const fetchLastLocations = () => dispatch => {
    axios.get(`${URL}/last_locations`)
        .then(response => {
            dispatch({
                type: FETCH_LAST_LOCATIONS,
                location: response.data.data,
            })
        }).catch(err => {
            console.log("Error", err.response)
            dispatch({
                type: FETCH_LAST_LOCATIONS_ERROR,
                error: err.response,
            })
        })
}

export const fetchLastLocation = (id) => dispatch => {
    axios.get(`${URL}/last_location/${id}`)
        .then(response => {
            dispatch({
                type: FETCH_LAST_LOCATION,
                location: response.data.data,
            })
        }).catch(err => {
            console.log("Error", err.response)
            dispatch({
                type: FETCH_LAST_LOCATION_ERROR,
                error: err.response,
            })
        })
}