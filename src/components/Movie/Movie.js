import React from 'react'

export const Movie = React.memo(({ info: { Title, Poster } }) => {
  return (
    <div>
      <img src={Poster} alt={Title}/>
      <div>{Title}</div>
    </div>
  )
})
