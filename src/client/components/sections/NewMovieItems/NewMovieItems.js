import React, {Component} from 'react';
import Loading from "../../atoms/Loading/Loading";
import MoviesList from "../../atoms/MoviesList/MoviestList";
import connect from "react-redux/es/connect/connect";
import getLatestResults from "../../../actions/latestResults";

class NewMovieItems extends Component {
    componentDidMount() {
        this.props.getLatestResults();
    }

    render() {
        const {latestResults: {results}} = this.props;
        if (!results.length) return <Loading/>
        const newResults = results.map(r => ({show: {...r}}))
        return (
            <MoviesList list={newResults}/>
        )
    }
}


export default connect(state => ({
        latestResults: state.latestResults
    }),
    dispatch => ({
        getLatestResults: param => dispatch(getLatestResults(param))
    }))(NewMovieItems);
