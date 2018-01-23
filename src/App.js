import React, { Component } from 'react';
import { Route, Switch, Link, withRouter} from 'react-router-dom'
import './App.css';
import HomeContainer from './containers/HomeContainer'
import listPosts from './actions/posts'

class App extends Component {
  constructor(props){
    super(props)
    props.
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/home' render={(props) => <HomeContainer {...props} />} />
          <Route render={(props) => <HomeContainer {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
