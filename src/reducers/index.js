import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, SEARCH_RESET } from '../constants'

const initialState = {
  movies: [],
  isLoaded: false,
  error: null,
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
      error: null,
    }
  }

  if (action.type === FETCH_MOVIES_FAILURE) {
    const { error } = action

    return {
      ...initialState,
      isLoaded: true,
      error,
    }
  }

  return state
}
