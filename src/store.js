//import thunkMiddleware from 'redux-thunk';
import {applyMiddleware} from 'redux';
import {configureStore} from "@reduxjs/toolkit";
import allReducers from './reducers/index';

export default configureStore({
    reducer:{
        reducer:allReducers,
    }
})

