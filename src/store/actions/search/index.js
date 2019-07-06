export const GET_SEARCH_DATA = 'GET_SEARCH_DATA';

export function getSearchData(data) {
    
    return (dispatch) => {
        dispatch({
            type : GET_SEARCH_DATA,
            data : data
        })
    }
}
