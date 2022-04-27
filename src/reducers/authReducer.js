const initialState = {
    loginDetails : null,
}

export default function(state = initialState, action) {
    const {type, payload, error, tokenError} = action;

    switch (type){
        case 'LOGIN' : 
        return {...state, loginDetails:payload}
        default:return state;
    }
}