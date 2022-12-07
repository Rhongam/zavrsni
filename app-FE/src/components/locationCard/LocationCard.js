import React from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import { Info } from '@mui/icons-material';

export default function LocationCard(props) {
  const { locations } = props;
  let navigate = useNavigate();

  return (
    locations.map((el) =>
      <Grid item md={6}>
        <Card sx={{ minHeight: 600 }}>
          <CardActions>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {el.name}
              </Typography>
            </CardContent>
            <Grid container justifyContent="flex-end">
              <Button onClick={() => navigate("/locations/" + el.name)}><Info /></Button>
            </Grid>
          </CardActions>
          <Box component="img"
            sx={{
              height: '400px',
              width: '100%'
            }}
            alt={el.name}
            src={window.location.origin + '/' + el.name.toLowerCase() + '.jpg'}>
          </Box>
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              {el.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  );
}
