import {GET_ZONE_ACTIVATE} from '../actions/constants';

const initialState = {
    zoneActivate :false,
}

export default function(state = initialState, action){
    const {type, payload, error} = action;

    switch (type) {
        case 'GET_ZONE_ACTIVATE':
            return{...state, zoneActivate:payload}

        case 'SET_ZONE_ACTIVATE':
            return{...state, zoneActivate:payload}

            default:return state;
    }
}