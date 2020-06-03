import { FETCH_ALL_WORKERS, FETCH_WORKER, URL } from './types';
import axios from 'axios';

export const fetchWorkers = () => dispatch => {
    axios.get(`${URL}/users`)
        .then(response => {
            dispatch({
                type: FETCH_ALL_WORKERS,
                workers: response.data.data
            })
        }).catch(err => console.log("err", err.response));
}

export const fetchWorker = (id) => dispatch => {
    console.log('url',`${URL}/user/${7}` )
    axios.get(`${URL}/user/${id}`)
        .then(response => { console.log(response.data.data)
            dispatch({
                type: FETCH_WORKER,
                worker: response.data.data
            })
        }).catch(err => console.log("err", err.response));
}
