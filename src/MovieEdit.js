import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export function MovieEdit({movielist,setmovielist}) 
{
  const {id}=useParams()
  const movie=movielist[id]
  console.log(movielist)
  
   
  const [name,setName]=useState(movie.name);
  const [poster,setPoster]=useState(movie.poster)
  const [rating,setrating]=useState(movie.rating)
  const [summary,setSummary]=useState(movie.summary)
  const [trailer,settrailer]=useState(movie.trailer);
  
   const navigate=useNavigate()
  return (
    <div className='movieedit-style'>
           <TextField  value={name}  label="Enter Name"  variant="standard" onChange={(e)=> setName(e.target.value)}
         />
        <TextField  value={poster} label="Enter Poster" variant="standard" onChange={(e)=> setPoster(e.target.value)}
         />
         <TextField  value={rating} label="Enter Rating" variant="standard" onChange={(e)=> setrating(e.target.value)}
         />
         <TextField  value={summary} label="Enter summary" variant="standard" onChange={(e)=> setSummary(e.target.value)}
         />
         <TextField  value={trailer} label="Enter trailer" variant="standard" onChange={(e)=> settrailer(e.target.value)}
         />

         <Button variant='contained'
         onClick={()=>
        {
           const updateMovie={
            name:name,poster:poster,
            rating:rating,
            summary:summary,
            trailer:trailer
          };setmovielist([...movielist,updateMovie]);
          console.log(updateMovie)
          navigate('/movie')
        }}
         >Update</Button>
    </div>
  );
}
