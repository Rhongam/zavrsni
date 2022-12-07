import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box, Grid, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useSelector } from 'react-redux';
import { selectAllLocations } from '../../redux/locationsSlice';
import { useNavigate } from "react-router-dom";
import './mapContent.scss'

const MapContent = () => {
    const locations = useSelector(selectAllLocations);
    let navigate = useNavigate();

    const locationPopup = (data) => {
        return (
            data.map((element) =>
                <Marker key={element.name} position={element.position} >
                    <Popup className='leaflet-popup'>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid className='popup-header' container spacing={2}>
                                <Grid item md={10}>
                                    <Box className='popup-title'>{element.name}</Box>
                                    <Box className='popup-subtitle'>({element.type})</Box>
                                </Grid>
                                <Grid className='popup-details-container' item md={2}>
                                    <InfoIcon onClick={(e) => {e.stopPropagation(); navigate("/locations/" + element.name)}} sx={{ color: "#1976d2", cursor:'pointer' }} className='popup-details-icon' />
                                </Grid>
                            </Grid>
                            <Typography>
                                {element.description}
                            </Typography>
                        </Box>
                    </Popup>
                </Marker >
            )
        )
    };

    return (
        <MapContainer center={[43.515, 16.444]} zoom={14} scrollWheelZoom={true} minZoom={13} maxZoom={16}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locationPopup(locations)}
        </MapContainer>
    );
};
export default MapContent;