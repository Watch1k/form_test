import { MovieList } from '../components'
import { connect } from 'react-redux'

const mapStateToProps = ({ movies, isLoaded, error }) => {
  return {
    movies,
    isLoaded,
    error,
  }
}

export const MovieListContainer = connect(mapStateToProps)(MovieList)
