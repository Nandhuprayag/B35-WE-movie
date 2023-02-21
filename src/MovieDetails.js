import { useNavigate, useParams } from "react-router-dom"
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { NotFoundPage } from "./NotFoundPage";
import { useEffect } from "react";


export function MovieDetails({movielist})
{
     const navigate=useNavigate()
    const {id}=useParams();
    const movie=movielist[id];
    
    if(!movie)
    {
        return <NotFoundPage/>
    }
    
    
    return(
        <div className="movie-detail-style">
            <iframe width="100%" height="250" src={movie.trailer} 
            title="Movie" allowfullscreen></iframe>
        <div className="movie-detail-container">
        <div className="movie-spec">
                    <h2 className="movie-name">{movie.name}</h2>
                    <p  className="movie-rating">
                 ⭐ {movie.rating}</p>
                </div>
        <p className="movie-summary">{movie.summary}</p>

       

        </div>
        <Button variant="contained"
        onClick={()=>navigate(-1)}
        startIcon={<ArrowBackIosNewIcon/>}
        >
            BACK
        </Button>
        </div>
    )
}