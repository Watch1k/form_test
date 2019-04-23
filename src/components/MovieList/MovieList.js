import React from 'react'
import { Movie } from '../Movie'

export const MovieList = React.memo(({ movies, isLoaded, error }) => (
    <>
      <h1>List of movies</h1>
      {error && <h2>{error}</h2>}
      {
        isLoaded
          ? movies.map(item => <Movie key={item.imdbID} info={item}/>)
          : <h4>Enter at least 3 characters</h4>
      }
    </>
  ),
)
