import {
    GET_MOVIE_DETAIL_RESULTS, SET_MOVIE_CAST_RESULTS,
    SET_MOVIE_DETAIL_RESULTS,
    SET_MOVIE_SEASONS_RESULTS
} from "../reducers/movieDetail";
import {search_detail_movie_request, search_movie_cast, search_movie_seasons} from "../utils/api";

const getDetailMovieResults = search_query => dispatch => {
    dispatch({
        type: GET_MOVIE_DETAIL_RESULTS
    });
    search_detail_movie_request(search_query).then(result => {
            dispatch({
                type: SET_MOVIE_DETAIL_RESULTS,
                payload: result
            })
        }
    )

    search_movie_seasons(search_query).then(result => {
            dispatch({
                type: SET_MOVIE_SEASONS_RESULTS,
                payload: result
            })
        }
    )
    search_movie_cast(search_query).then(result => {
            dispatch({
                type: SET_MOVIE_CAST_RESULTS,
                payload: result
            })
        }
    )
}

export default getDetailMovieResults;

