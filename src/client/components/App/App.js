import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "../../pages/Home/home";
import NotFound from "../../pages/NotFound/NotFound";
import TopMenu from "../sections/TopMenu/TopMenu";
import MovieDetail from "../../pages/MovieDetail/MovieDetail";

class App extends Component {
    render() {
        return (
            <div className="App">
                <TopMenu/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/detail/:id' component={MovieDetail}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

export default App;
