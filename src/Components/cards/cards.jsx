
import "./cards.css"



    


import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions } from '@mui/material';





export default function MultiActionAreaCard(props) {
  return (
  <div >
    <Card sx={{ width: "300px",margin:"1em" ,display:"inline-flex",flexWrap:"wrap",zIndex:"5" }}>
      <div style={{backgroundImage: `url(${props.cardDetail.cover})`,zIndex:"5"}}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="140px"
          image={props.cardDetail.thumbnail}
          alt="green iguana"
          width="200px"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.cardDetail.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.cardDetail.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
     
      <div class="btn-2">
   
    <a href="/"><span>Read more ...</span></a>
  </div>
  
      
      </CardActions>
      </div>
    </Card>
    </div>
  );
}

    






 