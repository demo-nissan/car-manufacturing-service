import {
GET_ZONE_ACTIVATE, 
SET_ZONE_ACTIVATE,
SET_ZONE_DATA,
GET_ZONE_DATA} from './constants';
import axios from 'axios';


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

export const getZoneData = id =>{

    let data = {
        Plant :  [
            {
            plantCode: "2c1",
            plantName : "Nissan",
            country:"India",
            status:"active",
                Group: [{
                    GroupCode: "2c1",
                    GroupName : "Nissan",
                        Zone: [{
                        ZoneCode: "NSNKOCHI",
                        ZoneName : "Nissan Kochi",
                        }]
                    },{
                    GroupCode: "2c1",
                    GroupName : "Nissan",
                        Zone: [{
                            ZoneCode: "NSNTVM",
                            ZoneName : "Nissan Tvm",
                        }]
                    },]
        
            },
            {
                plantCode: "2c2",
                plantName : "Nissan",
                country:"India",
                status:"deactive",
                    Group: [{
                        GroupCode: "2c1",
                        GroupName : "Nissan",
                            Zone: [{
                            ZoneCode: "NSNBAN",
                            ZoneName : "Nissan BAN",
                            }]
                        },{
                        GroupCode: "2c1",
                        GroupName : "Nissan",
                            Zone: [{
                                ZoneCode: "NSNCHN",
                                ZoneName : "Nissan Chennai",
                            }]
                        },]
            
                },
            ]
        };
    return {
        type:GET_ZONE_DATA,
        payload:data,
    }
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