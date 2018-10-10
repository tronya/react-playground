import React, {Component} from 'react';
import {connect} from "react-redux";
import getSearchResults from "../../../actions/searchResults";

class SearchField extends Component {
    constructor(props) {
        super(props);
        this.state = {inputValue: ''};

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({inputValue: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.apiSearch(this.state.inputValue)
    }

    render() {
        return (
            <div className="search">
                <form onSubmit={this.onSubmit}>
                    <input type="text"
                           name="search"
                           className="search__input"
                           value={this.state.inputValue}
                           onChange={this.onChange}/>
                    <button type="submit">search</button>
                </form>
            </div>
        );
    }
}

export default connect(
    state => ({API_SEARCH: state.API_SEARCH}),
    dispatch => ({
        apiSearch: value => dispatch(getSearchResults(value))
    })
)(SearchField);
