
import './App.css';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Home } from './Home';
import { Addcolor } from './Addcolor';
// card import starts here
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { MovieList } from './MovieList';
import { Counter } from './Counter';
import { MovieDetails } from './MovieDetails';
import { AddMovie } from './AddMovie';
import MailIcon from '@mui/icons-material/Mail';
import { Badge } from 'react-bootstrap';
import { NotFoundPage } from './NotFoundPage';
import { MovieEdit } from './MovieEdit';

const InitialMovieList=
[
  {
    "id": "100",
    "name": "RRR",
    "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    "rating": 8.8,
    "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
  },
  {
    "id": "101",
    "name": "Iron man 2",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    "rating": 7,
    "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
  },
  {
    "id": "102",
    "name": "No Country for Old Men",
    "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    "rating": 8.1,
    "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
  },
  {
    "id": "103",
    "name": "Jai Bhim",
    "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    "rating": 8.8,
    "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
  },
  {
    "id": "104",
    "name": "The Avengers",
    "rating": 8,
    "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
  },
  {
    "id": "105",
    "name": "Interstellar",
    "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    "rating": 8.6,
    "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
  },
  {
    "id": "106",
    "name": "Baahubali",
    "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    "rating": 8,
    "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
  },
  {
    "id": "107",
    "name": "Ratatouille",
    "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    "rating": 8,
    "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
  }
]


function App() 
{
  
  const [mode,setmode]=useState('dark')
  const navigate=useNavigate()
  const [movielist,setmovielist]=useState(InitialMovieList)
  const Theme = createTheme({
    palette: {
      mode: mode,
    },
  });
   

   

  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
      <CssBaseline />
       <Box sx={{ flexGrow: 1 }}>
       <AppBar position='static'>
        <Toolbar className='toolbar-style'>
          <div className='btn-container'>
          <Button variant="outlined" color='inherit' onClick={()=>navigate('/')}>Home</Button>
          <Button variant="outlined" color='inherit' onClick={()=>navigate('/movie')}>Movies</Button>
          <Button variant="outlined" color='inherit' onClick={()=>navigate('/movie/add')}>Add Movie</Button>
          <Button variant="outlined" color='inherit' onClick={()=>navigate('/colorgame')}>Color Game</Button>
          <Button variant='outlined' color='inherit' onClick={()=> navigate('/counter')}>Counter</Button>
          </div>
          <div className='mode-style'>
            <img src='https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg' width={"40px"} alt='https://media.istockphoto.com/id/1403413065/photo/amazing-alpine-landscape-in-lauterbrunnen-village-with-church-and-waterfall-in-switzerland.jpg?b=1&s=170667a&w=0&k=20&c=iIChzzemiU8qsW2UBqf10SOFpRY4oKxMSObHZ75DuR8='/>
            <Button color='inherit' variant='outlined' 
            startIcon={mode === 'dark'?<Brightness5Icon/>:<Brightness7Icon/>}
            onClick={()=> setmode(mode === 'light'?"dark":'light')}
            >{mode === 'light'?"DARK ":"LIGHT "}MODE</Button>
          </div>
        </Toolbar>
      </AppBar>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie' element={<MovieList movielist={movielist}/>}/>
        <Route path='/film' element={<Navigate replace to='/movie'/>}/>
        <Route path='/movie/:id' element={<MovieDetails movielist={movielist}/>}/>
        <Route path='/movie/edit/:id' element={<MovieEdit movielist={movielist} setmovielist={setmovielist}/>}/>
        <Route path='/colorgame' element={<Addcolor/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/movie/add' element={<AddMovie  movielist={movielist} setmovielist={setmovielist}/>}/>
        <Route path='/*' element={<NotFoundPage/>}/>
        {/* <Route path='*' element={<Navigate replace to='/404'/>}/> */}
       </Routes>
       </Box>
       </ThemeProvider>
    </div>
  );
}




export default App;
