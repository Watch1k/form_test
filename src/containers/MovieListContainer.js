import { MovieList } from '../components'
import { connect } from 'react-redux'

const mapStateToProps = ({ movies, isLoaded }) => {
  return {
    movies,
    isLoaded,
  }
}

export const MovieListContainer = connect(mapStateToProps)(MovieList)
