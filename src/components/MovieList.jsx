import React from 'react'
import Movies from './Movies'
function MovieList({ movies}) {
  return (
    <div className="d-flex flex-wrap justify-content-around">
    {movies.map((movie, index) => (
      <Movies
        key={index}
        title={movie.title}
        image={movie.image}
        description={movie.description}
        industry={movie.industry}
      />
    ))}
  </div>
  )
}

export default MovieList
