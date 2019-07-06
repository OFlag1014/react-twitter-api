import { combineReducers } from 'redux';

// import booking from './booking';
import search from "./search";


const createReducer = (asyncReducers) =>
    combineReducers({
        search,
        ...asyncReducers
    });

export default createReducer;
