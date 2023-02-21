import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


export function AddMovie({ movielist,setmovielist }) 
{
      const [name,setName]=useState("");
      const [poster,setPoster]=useState("");
      const [rating,setrating]=useState("");
      const [summary,setSummary]=useState('')
      const [trailer,settrailer]=useState('');

      //Adding new Movie logic
     
      //after adding need to navigate to the movie page
      const navigate=useNavigate()
  return (
    <div className='add-movie-form'>
        <TextField id="standard-basic"  label="Enter name" variant="standard" onChange={(e)=> setName(e.target.value)}
         />
        <TextField id="standard-basic" label="Enter Poster" variant="standard" onChange={(e)=> setPoster(e.target.value)}
         />
         <TextField id="standard-basic" label="Enter Rating" variant="standard" onChange={(e)=> setrating(e.target.value)}
         />
         <TextField id="standard-basic" label="Enter summary" variant="standard" onChange={(e)=> setSummary(e.target.value)}
         />
         <TextField id="standard-basic" label="Enter trailer" variant="standard" onChange={(e)=> settrailer(e.target.value)}
         />
          <Button variant="contained" id='addmovie-btn'
          onClick={()=>{
            const newMovie={
              name:name,
              poster:poster,
              rating:rating,
              summary:summary,
              trailer:trailer
           };setmovielist([...movielist,newMovie]);
           navigate('/movie')
          }
          
          }
          
          > Add Movie</Button>
    </div>
  );
}
