export const GET_MOVIE_DETAIL_RESULTS = "GET_MOVIE_DETAIL_RESULTS";
export const SET_MOVIE_DETAIL_RESULTS = "SET_MOVIE_DETAIL_RESULTS";
export const SET_MOVIE_EPISODES_RESULTS = "SET_MOVIE_EPISODES_RESULTS";
export const SET_MOVIE_SEASONS_RESULTS = "SET_MOVIE_SEASONS_RESULTS";
export const SET_MOVIE_CAST_RESULTS = "SET_MOVIE_CAST_RESULTS";

const movieDetail = (state = {detail: []}, action) => {
    switch (action.type) {
        case GET_MOVIE_DETAIL_RESULTS:
            return state;
        case SET_MOVIE_DETAIL_RESULTS:
            return {...state, detail: action.payload}
        case SET_MOVIE_EPISODES_RESULTS:
            return {...state, episodes: action.payload}
        case SET_MOVIE_SEASONS_RESULTS:
            return {...state, seasons: action.payload}
        case SET_MOVIE_CAST_RESULTS:
            return {...state, cast: action.payload}
        default:
            return state
    }
}
export default movieDetail
