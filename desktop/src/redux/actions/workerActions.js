import { URL, FETCH_WORKERS, FETCH_WORKERS_ERROR, FETCH_WORKERS_EMPTY } from './types';
import axios from 'axios';

export const fetchWorkers = () => dispatch => {
    axios.get(`/users`)
        .then(response => {
            console.log(response.data.data)
            if(response.data.data.length > 0) {
                dispatch({
                    type: FETCH_WORKERS,
                    workers: response.data.data
                })
            } else {
                dispatch({
                    type: FETCH_WORKERS_EMPTY,
                    empty: 'Workers list is empty.'
                })
            }
            
        }).catch(err => {
            console.log(err.response)
            dispatch({
                type: FETCH_WORKERS_ERROR,
                error: err.response
            })
        })
}