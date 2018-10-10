import {combineReducers} from "redux";
import apiSearch from "./apiSearchReducer";

const allReducers = combineReducers({
    apiSearch
});
export default allReducers
