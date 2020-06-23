import { URL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL } from '../actions/types';
import axios from 'axios';
// const db = require('../../database/db');
// const { app } = window.require('electron').remote;
// const Datastore = require('nedb');
// const db = window.require('electron').remote.getGlobal('database');
const  db = window.require('electron').remote.getGlobal('database');

export const login = (data) => dispatch => {  
    // const dbFactory = (fileName) => new Datastore({
    //     filename: `${process.env.NODE_ENV === 'dev' ? '.' : 
    //     app.getPath('userData')}\\database\\${fileName}`,
    //         autoload: true
    // })
    
    // const db = {
    //     admin: dbFactory('admin.db'),
    //     workers: dbFactory('main.db'),
    // }
    db.admin.insert({hello: 'admin10'}, function(err, newtask){});
   db.admin.find({}, function(err, doc) {
        console.log(doc)
    })
    // console.log("logged")
    // // axios.post(`${URL}/login`, data, { withCredentials: true }, {headers: { 'Access-Control-Allow-Origin': '*'}})
    // axios.post(`/login`, data, { withCredentials: true })
    //     .then(data => {
    //         const accessToken = data.data.access_token;
    //         // db.admin.insert({token: accessToken})
    //         // console.log('db.find()', db.admin.find({}))
       
    //         axios.get(`/user`, {headers: {'Authorization' : data.data.token_type + ' ' + data.data.access_token}}, {withCredentials: true})
    //             .then(user => {
    //                 // console.log('db.find()', db.admin.find({}))
    //             // console.log("db.admin.find({}).db.executor.buffer[0].arguments[0].token", db.admin.find({}).db.executor.buffer[db.admin.find({}).db.executor.buffer.length - 1].arguments[0].token)
    //               if(user.data.data.role === 'admin'){
    //                 dispatch({
    //                     type: LOGIN_SUCCESS,
    //                     // token:  db.admin.find({}).db.executor.buffer[db.admin.find({}).db.executor.buffer.length - 1].arguments[0].token,
    //                     adminProfile: user.data.data,
    //                 })
    //             } else {
    //                 dispatch({
    //                     type: LOGIN_FAIL,
    //                     dispatch: 'Pease register as admin.'
    //                 })
    //             }
    //         })
    //     }).catch(err => {
    //         dispatch({
    //             type: LOGIN_FAIL,
    //             dispatch: err.response
    //         })
    //     });

    //     // console.log('database', db.admin.find(db.executor.buffer[0].arguments[0].token))
    //     // console.log('database', db.admin.find({}).length)
    //     // if(db.admin.find({})) {

    //     // }
}

// export const getToken = () => dispatch => {
//     console.log(db.admin.find({}).db.executor.buffer);
//     if(db.admin.find({}).db.executor.buffer.arguments !== undefined ) {
//         axios.get(`/user`, {headers: {'Authorization' : 'Bearer ' + db.admin.find({}).db.executor.buffer[db.admin.find({}).db.executor.buffer.length - 1].arguments[0].token}}, {withCredentials: true})
//         .then(user => {
//         console.log("db.admin.find({}).db.executor.buffer[0].arguments[0].token", db.admin.find({}).db.executor.buffer[db.admin.find({}).db.executor.buffer.length - 1].arguments[0].token)
//             dispatch({
//                 type: LOGIN_SUCCESS,
//                 token:  db.admin.find({}).db.executor.buffer[db.admin.find({}).db.executor.buffer.length - 1].arguments[0].token,
//                 adminProfile: user.data.data,
//             })
//         }).catch(err => {
//             dispatch({
//                 type: LOGIN_FAIL,
//                 dispatch: err.response
//             })
//         })
//     } else {
//         dispatch({
//             type: LOGIN_SUCCESS,
//             token: null,
//             adminProfile: null,
//         })
//     }
   
// }

export const logout = () => dispatch => {  
    // console.log("db.admin.find({}).db.executor.buffer[0].arguments[0].token", db.admin.find({}))
    // if(db.admin.find({}).db.executor.buffer.length > 0) {
    //     //  = db.admin.find({}).db.executor.buffer[0].arguments[0].token;
    //     axios.get(`/logout`, { headers: {'Authorization' : 'Bearer ' + db.admin.find({}).db.executor.buffer[1].arguments[0].token }}, { withCredentials: true })
    //         .then(() => {
    //             db.admin.find({}, function(err, docs) {
    //                 // console.log('error', err || 'error', docs);
    //                 const token = db.admin.find({}).db.executor.buffer[0].arguments[0].token;
    //                 db.admin.remove({token: token}, { multi: true })
    //               })
    //             dispatch({
    //                 type: LOGOUT_SUCCESS,
    //                 adminToken:  null,
    //                 adminProfile: {},
    //             })
    //         }).catch(err => {
    //             console.log('Error', err.response)
    //             console.log("unregistered")
    //             db.admin.remove({}, { multi: true })
    //             dispatch({
    //                 type: LOGOUT_FAIL,
    //                 dispatch: err.response
    //             })
    //         });
    // } else {
    //     console.log("unregistered")
    //     console.log("unreg", db.admin.find({}).db.executor.buffer)
    // }
}