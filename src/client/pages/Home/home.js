import React, {Component} from 'react';
import SearchField from "../../components/sections/SearchField/SearchField";
import SearchResults from "../../components/sections/SerachResults/searchResults";
import NewMovieItems from "../../components/sections/NewMovieItems/NewMovieItems";

class Home extends Component {
    render() {
        return (
            <div>
                <SearchField/>
                <SearchResults/>
                <NewMovieItems/>
            </div>
        );
    }
}

export default Home;
