import { FETCH_ALL_USERS, URL } from './types';
import axios from 'axios';

export const fetchUsers = () => dispatch => {
    axios.get(`${URL}/users`)
        .then(response => {
            console.log("response", response)
        }).catch(err => console.log("err", err.response));
}
