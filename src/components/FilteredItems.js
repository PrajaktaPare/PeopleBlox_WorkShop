import react from 'react';
function FilteredItems()
{
    const searchItems=()=>
        {
            if(e.target.value == movies.title)
            {
              <Box sx={{ width: '25%' }}>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {movies.map((movie) => (
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
               else 
               {
                <h1>No Movies Found</h1>
               }
              </Grid>
            </Box>
            }
        }
}