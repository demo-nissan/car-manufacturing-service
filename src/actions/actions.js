import {
GET_ZONE_ACTIVATE, 
SET_ZONE_ACTIVATE,
SET_ZONE_DATA,
GET_ZONE_DATA} from './constants';
import axios from 'axios';
import { mockData } from '../components/mockData/mockData';

export const getZoneActivate = id =>{
    return {
        type:GET_ZONE_ACTIVATE,
        payload:id,
    }
}


// export const getZoneDataSample = id =>{

//     return function(dispatch){
//         axios.get("https://reqres.in/api/users/").then(response => {

//         console.log("%$%$%$$%$%$%%%%%%%%%%%%%%%%@@@2222");
//         console.log(response);
//         console.log("%$%$%$$%$%$%%%%%%%%%%%%%%%%@@@2222");
//             dispatch({
//                 type:GET_ZONE_DATA,
//                 payload:"data",
//             })
//         })
//         .catch(errors =>{
            
//         })
//     }
// }

export const getZoneData = () =>{
    //let data =mockData;
    return function(dispatch){
        axios.get('http://localhost:8080/group/getAll').then((response) => {
            dispatch({
                type:GET_ZONE_DATA,
                payload: response.data,
            })
        })
        .catch(errors =>{
            console.log(errors)    
        });
    }
    // return {
    //     type:GET_ZONE_DATA,
    //     payload:data,
    // }
}

export const setZoneData = data =>{
    return {
        type:SET_ZONE_DATA,
        payload:data,
    }
}

export const setZoneActivate = data =>{
    return {
        type:SET_ZONE_ACTIVATE,
        payload:data,
    }
}