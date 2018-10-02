import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home/home";
import NotFound from "../../pages/NotFound/NotFound";
import TopStories from "../../pages/TopStories/topStories";
import TopMenu from "../sections/TopMenu/TopMenu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/top-stories' component={TopStories}/>
          {/* when none of the above match, <NoMatch> will be rendered */}
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
