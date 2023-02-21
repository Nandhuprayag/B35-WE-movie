import React from 'react';
import { Movie } from "./Movie";

export function MovieList({ movielist }) 
{
  return (
      <div className='movie-list'>
      {movielist.map((mv, index) => (
        <Movie movie={mv} key={index} id={index}/>
      ))}
      </div>
  );
}
