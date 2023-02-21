import { useState } from "react"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Icon, IconButton } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import { Counter } from "./Counter";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";



export function Movie({ movie, id }) 
{
  const [show,setshow]=useState(true);
  
  const navigate=useNavigate()
  const rating_style={
    color:movie.rating>=8?"green":"red"
    
  }
  const summary_style={
    display:show ? "block" : "none"
  }
  return (
    <div className="movie-container">
      <img className="movie-poster" src={movie.poster} alt={movie.name} />
      <div className="movie-spec">
        
        <h2 className="movie-name">{movie.name}-{id}
          <IconButton
            onClick={() => setshow(!show)}
            size='medium'
            aria-label="Toggle description"
            color="primary">
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}

          </IconButton>


          <IconButton className="toggle-style"
            onClick={() => navigate(`/movie/${id}` )}
            aria-label="Info"
            color="primary">
            <InfoIcon />
          </IconButton>

        </h2>
        <p style={rating_style} className="movie-rating">
          ⭐ {movie.rating}</p>
      </div>


      {/* <p style= {summaryStyle} className="movie-summary">{movie.summary}</p> */}
      {show ? <p className="movie-summary">{movie.summary}</p> : null}
      <div className="movie-style">
      <Counter />
        <div>
          <IconButton color="error">
            <DeleteIcon/>
          </IconButton>
          <IconButton color="warning"  onClick={()=> navigate(`/movie/edit/${id}`)}>
            <EditIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}
