import React, {Component} from 'react';
import {connect} from "react-redux";
import Loading from "../../atoms/Loading/Loading";
import MovieItem from "../../atoms/MovieItem/MovieItem";

class SearchResults extends Component {
    render() {
        const {searchResults: {results}} = this.props;
        console.log(results)
        if (!results.length) return <Loading/>
        return (
            <div className="bg__grey row">
                {results.map(item => <MovieItem {...item} key={item.show.id}/>)}
            </div>
        )
    }
}

export default connect(state => ({
    searchResults: state.apiSearch
}))(SearchResults);
