import {LOGIN_SUCCESS} from './types';
import axios from 'axios';


export const login = ({mobile}) => async dispatch => {
    //return async dispatch => {
    const config = {
        header : {
            "Content-Type": "application/json"
        }
    };
    const body = {
        mobile
    }
    res = await axios.post('http://192.168.1.37:5000/people', body, config);

    
    console.log(res.data);
    dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
    });
}

