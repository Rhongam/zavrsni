import React, { useEffect } from 'react';
import {  Grid, Typography } from '@mui/material';
import './pages.css';

const Home = () => {
    useEffect(() => {
        document.title = 'Home';
    });

    return (
        <Grid container className='landing-page-container' sx={{ height: '85.7vh' }}>
            <Grid item md={12}>
                <img src={window.location.origin + '/air-quality-control-logo.png'} className='landing-page-air-quality-image' alt='app-logo0'/>
                <Typography variant='h1' className='landing-page-title'>Air Quality Control</Typography>
            </Grid>
        </Grid>
    );
};
export default Home;