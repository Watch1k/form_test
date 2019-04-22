import { Search } from '../components'
import { connect } from 'react-redux'

import { fetchMovies, resetSearch } from '../actions'

const mapStateToProps = (state) => {
  return { ...state }
}

const mapDispatchToProps = dispatch => {
  return {
    resetSearch: () => dispatch(resetSearch()),
    fetchMovies: (queryParams) => dispatch(fetchMovies(queryParams)),
  }
}

export const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)
