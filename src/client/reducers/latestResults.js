export const GET_LATEST_RESULTS = "GET_LATEST_RESULTS";
export const SET_LATEST_RESULTS = "SET_LATEST_RESULTS";

const latestResults = (state = {results: []}, action) => {
    switch (action.type) {
        case GET_LATEST_RESULTS:
            return state;
        case SET_LATEST_RESULTS:
            return {...state, results: action.payload}
        default:
            return state
    }
}
export default latestResults
