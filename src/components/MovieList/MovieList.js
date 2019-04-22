import React from 'react'
import { Movie } from '../Movie'

export const MovieList = React.memo(({ movies, isLoaded }) => (
  <>
    <h1>List of movies</h1>
    {
      isLoaded
        ? (
          movies.length
            ? movies.map(item => <Movie key={item.imdbID} info={item}/>)
            : <h4>Nothing found, try again :(</h4>
        )
        : <h4>Enter at least 3 characters</h4>
    }
  </>
))
