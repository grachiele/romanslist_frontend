function postsReducer(state={posts:[]},action){
  switch (action.type){
    case "FETCH_POSTS":
      return Object.assign({},state,{...action.payload})
    default:
      return state
  }
}

export default postsReducer;
