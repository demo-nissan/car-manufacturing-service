import {GET_ZONE_ACTIVATE, SET_ZONE_ACTIVATE} from './constants';


export const getZoneActivate = id =>{
    return {
        type:GET_ZONE_ACTIVATE,
        payload:id,
    }
}

export const setZoneActivate = data =>{
    return {
        type:SET_ZONE_ACTIVATE,
        payload:data,
    }
}