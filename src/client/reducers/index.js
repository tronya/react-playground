import { combineReducers } from "redux";
import TopStoriesReducer from "./topStorise";

const allReducers = combineReducers({
  topStories: TopStoriesReducer,
});
export default allReducers
