import {LOGIN_SUCCESS} from './types';
import axios from 'axios';


export const login = async ({mobile}) => {
    const config = {
        header : {
            "Content-Type": "application/json"
        }
    };
    const body = {
        mobile
    }
    res = await axios.post('http://192.168.1.37:5000/people', body, config);

    
    //console.log(res.data);
    return {
        type: LOGIN_SUCCESS,
        payload: res.data
    }
}

