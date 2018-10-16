import React, {Component} from 'react';
import {connect} from "react-redux";
import Loading from "../../atoms/Loading/Loading";
import MoviesList from "../../atoms/MoviesList/MoviestList";

class SearchResults extends Component {
    render() {
        const {searchResults: {results}} = this.props;
        if (!results.length) return <Loading/>
        return (
            <MoviesList list={results}/>
        )
    }
}

export default connect(state => ({
    searchResults: state.apiSearch
}))(SearchResults);
