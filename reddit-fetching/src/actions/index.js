export const FETCH_REQUEST = 'FETCH_REQUEST'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_ERROR = 'FETCH_ERROR'

export const fetchPostsRequest = () => ({
  type: FETCH_REQUEST
})

export const fetchPostsSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload
})

export const fetchPostsError = () => ({
  type: FETCH_ERROR
})

export const fetchPostsWithRedux = () => {
	return (dispatch) => {
  	dispatch(fetchPostsRequest());
    return fetchPosts().then(([response, json]) =>{
    	if(response.status === 200){
      	dispatch(fetchPostsSuccess(json))
      }
      else{
      	dispatch(fetchPostsError())
      }
    })
  }
}

const fetchPosts = () => {
  return fetch(`https://www.reddit.com/r/pokemon/.json`, { method: 'GET'})
    .then(response => Promise.all([response, response.json()]))
}
