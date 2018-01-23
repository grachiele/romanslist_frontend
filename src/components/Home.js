import React from 'react'
import { Route, Switch, Link, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    const posts = this.props.posts.map((post) =>
      <div key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
      </div>
    )
    return (
      <div>
        {posts}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    posts: state.posts.allPosts
  }
}

function mapDispatchToProps(dispatch){
  return {
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
