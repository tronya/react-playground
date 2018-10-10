import React, {Component} from 'react';
import {instagramAUTH} from "../../utils/api";

class Home extends Component {
    componentDidMount() {
        instagramAUTH()
            .then(r => window.location.href = r.url)
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Home;
