import { Button } from "@mui/material";
import { useState } from "react"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter()
{
    const [like,setlike]=useState(0);
    const [dislike,setdislike]=useState(0);
    return(
        <div className="counter-style">
            <IconButton aria-label="like" 
             onClick={()=> setlike(like+1)}
            ><Badge badgeContent={like} color="success"><ThumbUpIcon  color="primary"/></Badge>
            
            </IconButton>
            <IconButton aria-label="dislike" onClick={()=>setdislike(dislike+1)}>
            <Badge badgeContent={dislike} color="error"><ThumbDownIcon color="primary" /></Badge>
            </IconButton>
        </div>
    )
}