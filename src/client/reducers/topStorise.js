import { fetchInformation } from "../utils/api";

const GET_TOP_STORIES = "GET_TOP_STORIES";
const SET_TOP_STORIES = "SET_TOP_STORIES";

export const getTopStories = category => dispatch => {
  dispatch({
    type: GET_TOP_STORIES
  });
  fetchInformation(category).then(result => {
      dispatch({
        type: SET_TOP_STORIES,
        payload: result
      })
    }
  )
}

const TopStoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TOP_STORIES:
      return state;
    case SET_TOP_STORIES:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
export default TopStoriesReducer;
