import React, { Component } from 'react';
import './App.css';
import { fetchInformation } from "../../utils/api";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home/home";
import NotFound from "../../pages/NotFound/NotFound";
import TopStories from "../../pages/TopStories/topStories";

class App extends Component {
  componentDidMount() {
    fetchInformation().then(e => console.log(e))
  }

  render() {
    return (
      <div className="App">
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
