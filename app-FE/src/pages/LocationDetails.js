import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import LocationMeasurementsCard from '../components/locationMeasurementsCard/LocationMeasurementsCard';
import LocationDescriptionCard from '../components/locationDescriptionCard/LocationDescriptionCard';
import { selectAllLocations } from '../redux/locationsSlice';
import { useLocation } from 'react-router-dom';
import LocationDetailsChart from '../components/locationDetailsChart/LocationDetailsChart';
import LocationDetailsTable from '../components/locationDetailsTable/LocationDetailsTable';
import LocationDatePicker from '../components/locationDatePicker/LocationDatePicker';

import { Grid } from '@mui/material';

const LocationDetails = () => {
    useEffect(() => {
        document.title = 'Location';
    });

    const [startDate, setStartDate] = useState(new Date(1651356000000));
    const [endDate, setEndDate] = useState(new Date(1659304800000));

    const location = useLocation();
    const pathname = location.pathname.split("/").filter(el => el)[1];
    const sliced = pathname.charAt(0).toUpperCase() + pathname.slice(1);
    const locationName = useSelector(selectAllLocations).find(loc => loc.name === sliced);

    return (
        <Grid container spacing={1}>
            <Grid item xs={8}>
                <LocationMeasurementsCard location={locationName} />
            </Grid>
            <Grid item xs={4}>
                <LocationDescriptionCard location={locationName} />
            </Grid>
            <Grid item xs={12}>
                <LocationDatePicker startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} />
            </Grid>
            <Grid item xs={12}>
                <LocationDetailsChart location={locationName} startDate={startDate} endDate={endDate}/>
            </Grid>
            <Grid item xs={12}>
                <LocationDetailsTable location={locationName} startDate={startDate} endDate={endDate} />
            </Grid>
        </Grid>
    );
};
export default LocationDetails;