import {combineReducers} from "redux";
import apiSearch from "./apiSearchReducer";
import movieDetail from "./movieDetail";
import latestResults from "./latestResults";

const allReducers = combineReducers({
    movieDetail,
    apiSearch,
    latestResults,
});
export default allReducers
