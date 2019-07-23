import {LOGIN_SUCCESS, REGISTER_SUCCESS, LOAD_USER, LOG_OUT} from './types';
import axios from 'axios';
import {AsyncStorage} from 'react-native';


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
    res = await axios.post('http://192.168.1.37:5000/auth/login', body, config);

    _storeData = async () => {
        try {
            console.log("here is token : ", res.data.token);
            await AsyncStorage.setItem('user', res.data.token);
            console.log("done saving");
        } catch(err) {
            console.log("error saving", err);
        }
    }

    _storeData();

    
    console.log("loginr: ", res.data);
    dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.salmooniUser
    });
}


export const register = ({mobile, name}) => async dispatch => {
    const config = {
        header : {
            "Content-Type": "application/json"
        }
    };
    const body = {
        mobile,
        name, 
        type: 'salmooni'
    }

    res = await axios.post('http://192.168.1.37:5000/auth/register', body, config);
    console.log(res.data);

    _storeData = async () => {
        try {
            console.log("here is token : ", res.data.token);
            await AsyncStorage.setItem('user', res.data.token);
            console.log("done saving");
        } catch(err) {
            console.log("error saving", err);
        }
    }

    _storeData();
    
    dispatch({
        type: REGISTER_SUCCESS, 
        payload: res.data.result
    })
}


export const loadUser = ({user}) => async dispatch => {
    try{
        const config = {
            headers : {
                "x-auth-token": user
            }
        };
        const res = await axios.get('http://192.168.1.37:5000/auth', config)
        console.log("here : ", res.data);
    dispatch({
        type: LOAD_USER,
        payload: res.data
    })
    } catch(err){

    }
};


export const logOut = () => async dispatch => { 
    await AsyncStorage.removeItem('user');
    dispatch ({
        type: LOG_OUT
    })
};