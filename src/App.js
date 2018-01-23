import React, { Component } from 'react';
import { Route, Switch, Link, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import HomeContainer from './containers/HomeContainer'
import { listPosts } from './actions/posts'

class App extends Component {
  constructor(props){
    super(props)
    props.retrievePosts()
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

function mapDispatchToProps(dispatch) {
  return {
    retrievePosts: () => {
      dispatch(listPosts())
    }
  }
}

function mapStateToProps(state) {
  return {
    currentPosts: state.posts
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
