// import react from 'react';
// import movies from './moviesData';
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import SearchBar from './SearchBar';
// import img from './img.jpg';
// export default function SearchMovie() {
//     const searchTerm = document.getElementById("searchInput").value.toLowerCase();
//     const results = movies.filter(movie =>
//     movie.title.toLowerCase().includes(searchTerm)
//     );
  
//    return (
//     <Box sx={{ width: '25%' }}>
//       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
//         {movies.map((movie) => (
//           <Grid item xs={2} key={movie.title}>
//             <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
//               <img src={img} alt={movie.title} style={{ width: '25%' }} />
//               <h3>{movie.title}</h3>
//               <p>{movie.description}</p>
//               <p>Genre: {movie.genre}</p>
//               <p>Release Date: {movie.releaseDate}</p>
//               <p>Rating: {movie.rating}</p>
//             </Paper>
//           </Grid>
//         ))}
       
//       </Grid>
//     </Box>
//    );
//   }