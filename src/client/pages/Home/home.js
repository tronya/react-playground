import React, {Component} from 'react';
import SearchField from "../../components/sections/SearchField/SearchField";
import SearchResults from "../../components/sections/SerachResults/searchResults";

class Home extends Component {
    render() {
        return (
            <div>
                <SearchField/>
                <SearchResults/>
            </div>
        );
    }
}

export default Home;
