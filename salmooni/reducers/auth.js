import {LOGIN_SUCCESS, REGISTER_SUCCESS, LOAD_USER, LOG_OUT} from '../actions/types';

const initialState = {
    user: '',
    loaded: false
}

export default function(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case LOGIN_SUCCESS: 
            return {
                ...state, 
                user: payload,
                loaded: true
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                user : payload,
                loaded : true
            };
        case LOAD_USER:
            return {
                ...state,
                user: payload,
                loaded: true
            }
        case LOG_OUT:
            return {
                ...state, 
                user: '',
                loaded : false
            }
        default:
            return state;
    }
}