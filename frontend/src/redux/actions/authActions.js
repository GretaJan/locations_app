import { 
    URL, 
    LOG_IN_ADMIN, 
    LOG_IN_WORKER, 
    LOGIN_ERROR, 
    LOG_OUT, 
    LOG_OUT_ERROR 
} from './types';
import axios from 'axios';

export const login = (data) => dispatch => {

    axios.post(`${URL}/login`, data, {withCredentials: true})
        .then(data => {
            axios.get(`${URL}/user`, {headers: {'Authorization' : data.data.token_type + ' ' + data.data.access_token}}, {withCredentials: true})
            .then(user => {
                // console.log("user from another then", user.data.data.role)
            if(user.data.data.role == 'admin') {
                console.log("admin")
                dispatch({
                    type: LOG_IN_ADMIN,
                    adminToken: data,
                    adminProfile: user.data.data,
                    isAdmin: true
                })
            } else {
                console.log("worker")
                dispatch({
                    type: LOG_IN_WORKER,
                    workerToken: data,
                    workerProfile: user.data.data,
                    isWorker: true
                })
            }
            })
        }).catch(err => {
            console.log(err.response)
            dispatch({
                type: LOGIN_ERROR,
                error: err.response
            })
        })
}
export const logOut = (data) => dispatch => {
    axios.get(`${URL}/logout`, { headers: {Authorization: data.data.token_type + ' ' + data.data.access_token}}, { withCredentials: true })
        .then(() => {
            console.log('logged out');
            // if(isAdmin) {
            //     dispatch({
            //         type: LOG_OUT,
            //         adminToken: {},
            //         workerToken: {},
            //         adminProfile: {},
            //         workerProfile: {}
            //     })
            // } else {
            //     dispatch({
            //         type: LOG_OUT,
            //         adminToken: {},
            //         workerToken: {},
            //         adminProfile: {},
            //         workerProfile: {}
            //     })
            // }
            dispatch({
                type: LOG_OUT
            })
        }).catch(err => {
            console.log("logout", err.response)
            dispatch({
                type: LOG_OUT_ERROR,
                error: err.response
            })
        })
}