import React, { useState } from 'react';
import { Card, CardContent, Grid, Table, TablePagination, TableCell, TableContainer, TableHead, TableRow, TableBody, Typography, Paper } from '@mui/material';

export default function LocationDetailsTable(props) {
    const { location, startDate, endDate } = props;

    const rows = [];

    let firstYear = startDate.getFullYear();
    let firstMonth = startDate.getMonth() + 1;
    if (firstMonth < 10) firstMonth = '0' + firstMonth;
    let firstDate = startDate.getDate();
    if (firstDate < 10) firstDate = '0' + firstDate;
    let firstHour = startDate.getHours();
    if (firstHour < 10) firstHour = '0' + firstHour;
    let firstMin = startDate.getMinutes();
    if (firstMin < 10) firstMin = '0' + firstMin;
    let startTime = firstYear + '-' + firstMonth + '-' + firstDate + ' ' + firstHour + ':' + firstMin;

    let lastYear = endDate.getFullYear();
    let lastMonth = endDate.getMonth() + 1;
    if (lastMonth < 10) lastMonth = '0' + lastMonth;
    let lastDate = endDate.getDate();
    if (lastDate < 10) lastDate = '0' + lastDate;
    let lastHour = endDate.getHours();
    if (lastHour < 10) lastHour = '0' + lastHour;
    let lastMin = endDate.getMinutes();
    if (lastMin < 10) lastMin = '0' + lastMin;
    let endTime = lastYear + '-' + lastMonth + '-' + lastDate + ' ' + lastHour + ':' + lastMin;

    let findStartDate = location.measurementData.date.find(date => date === startTime);
    let findStartDateIndex = location.measurementData.date.indexOf(findStartDate);

    let findEndDate = endTime === '2022-08-01 00:00' ? location.measurementData.date.slice(-1).pop() : location.measurementData.date.find(date => date === endTime);
    let findEndDateIndex = location.measurementData.date.indexOf(findEndDate);

    for (let index = findStartDateIndex; index < findEndDateIndex + 1; index++) {
        rows.push({ date: location.measurementData.date[index], temperature: location.measurementData.temperature[index], humidity: location.measurementData.humidity[index], co2: location.measurementData.co2[index] });
    }

    const [page, setPage] = useState(0);
    const rowsPerPage = 24;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <Card>
            <Grid sx={{ p: 2 }}>
                <Typography gutterBottom variant="h4" component="div">
                    Table data
                </Typography>
                <CardContent >
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 600, fontSize: 16 }}>Location name</TableCell>
                                    <TableCell sx={{ fontWeight: 600, fontSize: 16 }}>Date</TableCell>
                                    <TableCell sx={{ fontWeight: 600, fontSize: 16 }}>Temperature[°C]</TableCell>
                                    <TableCell sx={{ fontWeight: 600, fontSize: 16 }}>Humidity[%]</TableCell>
                                    <TableCell sx={{ fontWeight: 600, fontSize: 16 }}>co2[ppm]</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{location.name} </TableCell>
                                        <TableCell>{row.date}</TableCell>
                                        <TableCell>{row.temperature}</TableCell>
                                        <TableCell>{row.humidity}</TableCell>
                                        <TableCell>{row.co2}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[24]}
                        component="paper"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                    />
                </CardContent>
            </Grid>
        </Card >
    )
}