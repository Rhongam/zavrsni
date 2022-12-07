import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import LocationCard from '../components/locationCard/LocationCard';
import { useSelector } from 'react-redux';
import { selectAllLocations } from './../redux/locationsSlice';

const Locations = () => {
    useEffect(() => {
        document.title = 'locations';
    });
    const locations = useSelector(selectAllLocations);

    return (
        <Grid container spacing={1} sx={{ p: 1 }}>
            <LocationCard locations={locations} />
        </Grid>
    );
};
export default Locations;