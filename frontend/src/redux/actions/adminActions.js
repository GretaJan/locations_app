import {  URL, FETCH_ALL_WORKERS, FETCH_WORKER, REGISTER_WORKER, LOG_OUT, LOG_OUT_ERROR } from './types';
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

export const registerWorker = (data) => disptach => {
    axios.post(`${URL}/register`, data)
        .then(res => {
            console.log(res),
            dispatch({
                type: REGISTER_WORKER,
                // user: res
            })
        }).catch(err => console.log(err.response))
}


export const logOut = (data) => dispatch => {
    axios.get(`${URL}/logout`, { headers: {Authorization: 'Bearer ' + data.data.access_token}}, { withCredentials: true })
        .then(response => {
            console.log('logged out');
            dispatch({
                type: LOG_OUT,
                worker: ''
            })
        }).catch(err => {
            console.log(err.response),
            dispatch({
                type: LOG_OUT_ERROR,
                error: err.response
            })
        })
}