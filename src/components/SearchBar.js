

import React from 'react';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import img from './img.jpg';
import movies from './moviesData';

function SearchMovie(){
  let  results=[];
  if (document.getElementById("searchInput").value!=null)
   {
    console.log("aa");
   const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  results = movies.filter(movie =>
   movie.title.toLowerCase().includes(searchTerm)
   );
   console.log({results});
  
 }
 return (
     <h1>
       {results.map((movie) => (
          <Grid item xs={2} key={movie.title}>
            <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
              <img src={img} alt={movie.title} style={{ width: '25%' }} />
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <p>Genre: {movie.genre}</p>
              <p>Release Date: {movie.releaseDate}</p>
              <p>Rating: {movie.rating}</p>
            </Paper>
          </Grid>
        ))}
     </h1>
 );
 
}
export default function App() {
   return (
    <div className="search">
    <input type="text" id="searchInput" placeholder="Search movie name" />
    <button onClick={SearchMovie}>Search</button>
    
          
 </div>
 );



}

