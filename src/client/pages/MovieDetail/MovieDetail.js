import React, {Component} from 'react';
import {connect} from "react-redux";
import getDetailMovieResults from "../../actions/movieDetail";
import MovieItem from "../../components/atoms/MovieItem/MovieItem";
import SeasonsSection from "../../components/sections/SeasonsSection/SeasonsSection";
import Cast from "../../components/sections/Cast/Cast";

class MovieDetail extends Component {
    componentDidMount() {
        this.props.save();
    }

    render() {
        const {detail,seasons,cast} = this.props.movie;
        return (
            <div>
                <MovieItem show={detail}/>
                <Cast cast={cast}/>
                <SeasonsSection seasons={seasons}/>
            </div>
        );
    }
}

export default connect(state => ({
    ...state.movieDetail
}), dispatch => ({
    takeDetailInformation: id => dispatch(getDetailMovieResults(id))
}), (movie, e, w) => ({
    movie,
    save: () => e.takeDetailInformation(w.match.params.id)
    //console.log(r, e, w, q)
}))(MovieDetail);
