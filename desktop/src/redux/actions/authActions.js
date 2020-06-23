import { URL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL } from '../actions/types';
import axios from 'axios';
const  db = window.require('electron').remote.getGlobal('database');

export const login = (data) => dispatch => {  
    // axios.post(`${URL}/login`, data, { withCredentials: true }, {headers: { 'Access-Control-Allow-Origin': '*'}})
    axios.post(`/login`, data, { withCredentials: true })
        .then(data => {
            const accessToken = data.data.access_token;
            axios.get(`/user`, {headers: {'Authorization' : data.data.token_type + ' ' + data.data.access_token}}, {withCredentials: true})
                .then(user => {
                  if(user.data.data.role === 'admin'){
                    db.admin.insert({token: accessToken}, function(err, doc){
                        console.log("token", doc.token)
                        dispatch({
                            type: LOGIN_SUCCESS,
                            token: doc.token,
                            adminProfile: user.data.data,
                        })
                    });
                } else {
                    dispatch({
                        type: LOGIN_FAIL,
                        token: '',
                        error: 'Pease register as admin.'
                    })
                }
            })
        }).catch(err => {
            dispatch({
                type: LOGIN_FAIL,
                 token: '',
                error: err.response
            })
        });
}

export const getToken = () => dispatch => {
    db.admin.find({}, function(err, doc) {
        if(doc[0] !== undefined) {
            if(doc[0].length === 0) {
                dispatch({
                    type: LOGIN_FAIL,
                    token: '',
                    error: 'Pease register as admin.'
                })
            } else {
                dispatch({
                    type: LOGIN_SUCCESS,
                    token: doc[0].token
                })
            }
        }
    })
}

export const logout = (token) => dispatch => {  
    console.log("token", token)
    if(token.length > 0) {
        axios.get(`/logout`, { headers: {'Authorization' : 'Bearer ' + token }}, { withCredentials: true })
            .then(() => {
                db.admin.remove({token: token}, function(err, doc) {
                    dispatch({
                        type: LOGOUT_SUCCESS,
                        adminToken:  '',
                        adminProfile: {},
                    })
                })
            }).catch(err => {
                console.log('Error', err.response)
                dispatch({
                    type: LOGOUT_FAIL,
                    error: err.response
                })
            });
    } else {
        console.log('add', token)
        dispatch({
            type: LOGOUT_FAIL,
            error: 'Cannot proceed due to missing credentials.'
        })
    }
}