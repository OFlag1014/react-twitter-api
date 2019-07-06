/**
 * Description: Auth reducer
 * Date: 4/19/2019
 */

import *as Actions from './../../actions';

const initialState = {
    data : '',
    error : '',
    loading : ''
}

const search = function (state = initialState, action) {
    switch ( action.type ) {
        case Actions.GET_SEARCH_DATA:
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
    }
};

export default search;