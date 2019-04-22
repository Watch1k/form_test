import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, SEARCH_RESET } from '../constants'

const initialState = {
  movies: [],
  isLoaded: false,
}

export default function fetchReducer(state = initialState, action) {
  if (action.type === SEARCH_RESET) {
    return {
      ...initialState,
    }
  }

  if (action.type === FETCH_MOVIES_REQUEST) {
    return {
      ...state,
    }
  }

  if (action.type === FETCH_MOVIES_SUCCESS) {
    const { movies } = action
    return {
      ...state,
      movies,
      isLoaded: true,
    }
  }

  if (action.type === FETCH_MOVIES_FAILURE) {
    return {
      ...initialState,
      isLoaded: true,
    }
  }

  return state
}
