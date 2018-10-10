import {search_query_request} from "../utils/api";
import {GET_SEARCH_RESULTS, SET_SEARCH_RESULTS} from "../reducers/apiSearchReducer";

const getSearchResults = search_query => dispatch => {
    dispatch({
        type: GET_SEARCH_RESULTS
    });
    search_query_request(search_query).then(result => {
            dispatch({
                type: SET_SEARCH_RESULTS,
                payload: result
            })
        }
    )
}

export default getSearchResults;
