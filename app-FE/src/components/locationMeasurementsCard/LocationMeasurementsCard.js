import React from 'react';
import { Card, CardActions, CardContent, Grid, Typography } from '@mui/material';

export default function LocationMeasurementsCard(props) {
    const { location } = props;

    if (location) {
        const tempSum = location.measurementData.temperature.reduce((a, b) => a + b, 0);
        const tempAvg = (tempSum / location.measurementData.temperature.length).toFixed(2) || 0;
        const humiditySum = location.measurementData.humidity.reduce((a, b) => a + b, 0);
        const humidityAvg = (humiditySum / location.measurementData.humidity.length).toFixed(2) || 0;
        const co2Sum = location.measurementData.co2.reduce((a, b) => a + b, 0);
        const co2Avg = (co2Sum / location.measurementData.co2.length).toFixed(2) || 0;

        return (
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Card sx={{ height: 608, p: 2 }}>
                        <CardActions>
                            <Typography gutterBottom variant="h4" component="div">
                                Latest measurements
                            </Typography>
                        </CardActions>
                        <CardContent>
                            <Grid container xs={12}>
                                <Grid item xs={4}>
                                    <Typography variant="h6" >
                                        Temperature
                                    </Typography>
                                    <Typography variant="h4" color="#1976d2">
                                        {location.measurementData.temperature.slice(-1) + '°C'}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="h6" >
                                        Humidity
                                    </Typography>
                                    <Typography variant="h4" color="#1976d2">
                                        {location.measurementData.humidity.slice(-1) + '%'}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="h6" >
                                        co2
                                    </Typography>
                                    <Typography variant="h4" color="#1976d2">
                                        {location.measurementData.co2.slice(-1) + ' ppm'}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography gutterBottom variant="h4" component="div" sx={{ pt: 10 }}>
                                Average measurements
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div" color="text.secondary">
                                (last 3 months)
                            </Typography>
                            <Grid container xs={12} sx={{ pt: 2 }}>
                                <Grid item xs={4}>
                                    <Typography variant="h6" >
                                        Average temperature
                                    </Typography>
                                    <Typography variant="h4" color="#1976d2">
                                        {tempAvg + '°C'}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="h6" >
                                        Average humidity
                                    </Typography>
                                    <Typography variant="h4" color="#1976d2">
                                        {humidityAvg + '%'}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="h6" >
                                        Average co2
                                    </Typography>
                                    <Typography variant="h4" color="#1976d2">
                                        {co2Avg + ' ppm'}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        )
    }

    else return null;
}
