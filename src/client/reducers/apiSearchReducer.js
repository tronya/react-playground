export const GET_SEARCH_RESULTS = "GET_SEARCH_RESULTS";
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";

const apiSearch = (state = {results: []}, action) => {
    switch (action.type) {
        case GET_SEARCH_RESULTS:
            return state;
        case SET_SEARCH_RESULTS:
            return {...state, results: action.payload}
        default:
            return state
    }
}
export default apiSearch
