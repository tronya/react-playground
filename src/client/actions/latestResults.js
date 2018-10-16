import {getLatestResultsList} from "../utils/api";
import {GET_LATEST_RESULTS, SET_LATEST_RESULTS} from "../reducers/latestResults";

const getLatestResults = search_query => dispatch => {
    dispatch({
        type: GET_LATEST_RESULTS
    });
    getLatestResultsList(search_query).then(result => {
            dispatch({
                type: SET_LATEST_RESULTS,
                payload: result
            })
        }
    )
}

export default getLatestResults;
