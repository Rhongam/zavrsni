import React, { useState } from 'react';
import { Box, Button, ButtonGroup, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import { Image, Map } from '@mui/icons-material';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import './locationDescriptionCard.scss';

export default function LocationDescriptionCard(props) {
    const { location } = props;
    const [descriptionView, setDescriptionView] = useState('Image');

    if (location) {
        return (
            <Card sx={{ height: 608 }}>
                <CardActions>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {location.name}
                        </Typography>
                    </CardContent>
                    <Grid container justifyContent="flex-end">
                        <ButtonGroup variant="text" aria-label="text button group" >
                            <Button onClick={() => setDescriptionView('Map')}><Map /></Button>
                            <Button onClick={() => setDescriptionView('Image')}><Image /></Button>
                        </ButtonGroup>
                    </Grid>
                </CardActions>
                {descriptionView === 'Image' ?
                    <Box component="img"
                        sx={{
                            height: '400px',
                            width: '100%'
                        }}
                        alt={location.name}
                        src={window.location.origin + '/' + location.name.toLowerCase() + '.jpg'}>
                    </Box>
                    :
                    <MapContainer center={location.position} zoom={16} scrollWheelZoom={true} minZoom={16} maxZoom={17} className='location-description-map'>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker key={location.name} position={location.position} />
                    </MapContainer>
                }
                {descriptionView === 'Image' ?
                    <CardContent>
                        <Typography variant="body1" >
                            {location.description}
                        </Typography>
                    </CardContent> : null
                }
            </Card>
        )
    }

    else return null;
}
