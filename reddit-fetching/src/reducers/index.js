import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from '../actions'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return state;
    case FETCH_SUCCESS:
      return {...state, posts: action.payload};
    default:
      return state;
  }
}

export default reducer
