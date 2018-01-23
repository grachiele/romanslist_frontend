
function fetchPosts(posts){
  return{
    type: "FETCH_POSTS",
    payload: posts
  }
}

export function listPosts(){
  return function(dispatch){
    fetch('http://localhost:3000/api/v1/posts')
    .then(res => res.json())
    .then(resjson => dispatch(fetchPosts(resjson)))
  }
}
