function postsReducer(state={allPosts:[]},action){
  switch (action.type){
    case "FETCH_POSTS":
      return Object.assign({}, state ,{allPosts: [...action.payload]})
    default:
      return state
  }
}

export default postsReducer;

// return Object.assign({},state,{pendingGames: [...state.pendingGames,action.payload]})
