import { combineReducers } from "redux";
import reducer from "./cmsReducer";
import authReducer from "./authReducer"
import cmsReducer from "./cmsReducer"


const allReducers = combineReducers({
    authReducer : authReducer,
    cmsReducer : cmsReducer
})

export default allReducers