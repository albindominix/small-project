import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
import './Layout.css'
export default function Layout({item,filtered}) {
  return (
 <Grid sx={{ flexGrow: 1,mt:5 }} container spacing={3}>
    <Grid item xs={12}>
      <Grid container justifyContent="center" spacing={3}>
        {filtered.map((images) => (
          <Grid key={images.id} item>
         
        <Grid item xs={12} >
          
          <Card sx={{ maxWidth: 345,maxHeight:350}}>
            <CardMedia
            sx={{objectFit:'cover'}}
              component="img"
              height="140"
              image={images["image"]}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {images["genre"]}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <h2>Movie:-{images.fullTitle}</h2>
              <h4>CREW :- {images["crew"]}</h4>
              </Typography>
           
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
            </CardContent>
          </Card>
              </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
  )
}
