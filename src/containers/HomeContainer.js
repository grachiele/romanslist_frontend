import React, { Component } from 'react'
import Home from '../components/Home.js'
import { Route, Switch, Link, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

class HomeContainer extends Component{
  render(){
    return(
      <div>
        <h1>Home</h1>
        <Home />
      </div>
    )
  }
}


export default HomeContainer;
