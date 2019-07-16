import {LOGIN_SUCCESS} from '../actions/types';

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
        default:
            return state;
    }
}