import * as API from '../api'
import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, SEARCH_RESET } from '../constants'

export const resetSearch = () => ({
  type: SEARCH_RESET,
})

export const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_REQUEST,
})

export const fetchMoviesSuccess = payload => ({
  type: FETCH_MOVIES_SUCCESS,
  movies: [...payload.movies.Search],
})

export const fetchMoviesFailure = error => ({
  type: FETCH_MOVIES_FAILURE,
  error,
})


export const fetchMovies = params => dispatch => {
  dispatch(fetchMoviesRequest())

  return API.fetchMovies(params).then(
    movies => {
      if (movies.Error) return dispatch(fetchMoviesFailure(movies.Error))
      return dispatch(fetchMoviesSuccess({ movies }))
    },
  ).catch(
    error => dispatch(fetchMoviesFailure(error)),
  )
}
