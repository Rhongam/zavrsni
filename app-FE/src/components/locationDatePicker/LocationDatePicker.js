import React from 'react';
import { Card, CardContent, TextField, Grid, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function LocationDetailsTable(props) {
    const { startDate, setStartDate, endDate, setEndDate } = props;

    return (
        <Card sx={{ p: 2 }}>
            <Typography gutterBottom variant="h4" component="div">
                Date range selector
            </Typography>
            <CardContent>
                <Grid container >
                    <Grid item xs={2}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Date From"
                                value={startDate}
                                minDate={'Sun May 01 2022 00:00:00 GMT+0200 (srednjoeuropsko ljetno vrijeme)'}
                                maxDate={'Mon Aug 01 2022 00:00:00 GMT+0200 (srednjoeuropsko ljetno vrijeme)'}
                                onChange={(newValue) => {
                                    let parsedNewValue = new Date(newValue);
                                    setStartDate(parsedNewValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={2}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Date To"
                                value={endDate}
                                minDate={'Sun May 01 2022 00:00:00 GMT+0200 (srednjoeuropsko ljetno vrijeme)'}
                                maxDate={'Mon Aug 01 2022 00:00:00 GMT+0200 (srednjoeuropsko ljetno vrijeme)'}
                                onChange={(newValue) => {
                                    let parsedNewValue = new Date(newValue);
                                    setEndDate(parsedNewValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}

                            />
                        </LocalizationProvider>
                    </Grid>
                </Grid>
            </CardContent>
        </Card >
    )
}