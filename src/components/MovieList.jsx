import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import img from './img.jpg';
import './MovieList.css';
import movies from './moviesData';

// const movies=[{
//     title: 'Avtar',
//     description: 'A science fiction film',
//     imageUrl: img,
//     genre: 'Action',
//     releaseDate: '2023-01-01',
//     rating: 8.5,
// },
// {
//     title: 'Avtar2',
//     description: 'A science fiction film',
//     imageUrl: img,
//     genre: 'Action',
//     releaseDate: '2023-01-01',
//     rating: 8.5,
// }, 
// {
//     title: 'Avtar3',
//     description: 'A science fiction film',
//     imageUrl: img,
//     genre: 'Action',
//     releaseDate: '2023-01-01',
//     rating: 8.5,
// }
// ]


export default function MovieList() {
  return (
    <Grid container spacing={2}>
      {/* <Grid  spacing={{ xs: 2, md: 3 }}> */}
             {/* <div className="row"> */}

             {movies.map((movie) => {return (<Grid key={movie.title} item xs={4}>iohjoi
             <h3>{movie.title}</h3>
           
             <div>{movie.description}</div>

             <div>Genre: {movie.genre}</div>
              <div>Release Date: {movie.releaseDate}</div>
              <div>Rating: {movie.rating}</div>
             </Grid>)})}
             
             <Grid item xs={2}>joi</Grid>

      
    </Grid>
  );
}

