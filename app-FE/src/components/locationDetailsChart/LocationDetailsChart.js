import React, { useCallback, useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale } from 'chart.js';
import 'chartjs-adapter-moment';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectAllLocations } from '../../redux/locationsSlice';
import { Card, CardContent, Grid, Typography } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale);

export default function LocationDetailsChart(props) {
    const { location, startDate, endDate } = props;
    const locationDate = useSelector(selectAllLocations).find(el => el.name === location.name).measurementData.date;
    const locationTemp = useSelector(selectAllLocations).find(el => el.name === location.name).measurementData.temperature;
    const locationHumidity = useSelector(selectAllLocations).find(el => el.name === location.name).measurementData.humidity;
    const locationCo2 = useSelector(selectAllLocations).find(el => el.name === location.name).measurementData.co2;

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

    let findStartDate = locationDate.find(date => date === startTime);
    let findStartDateIndex = locationDate.indexOf(findStartDate);

    let findEndDate = endTime === '2022-08-01 00:00' ? locationDate[locationDate.length] : locationDate.find(date => date === endTime);
    let findEndDateIndex = locationDate.indexOf(findEndDate);

    let [labels, setLabels] = useState();

    const handleLabels = useCallback((date) => {
        setLabels(date.slice(findStartDateIndex, findEndDateIndex))
    }, [findStartDateIndex, findEndDateIndex])

    useEffect(() => {
        handleLabels(locationDate)
    }, [handleLabels, locationDate])

    let maxTicksLimit = 12;
    let minRotation = 0;
    let maxRotation = 90;

    if (location && labels) {
        if (labels.length < 25) {
            maxTicksLimit = 24
            labels = labels.map(lab => lab.slice(10, 16))
        }
        else if (labels.length > 24 && labels.length < 169) {
            maxTicksLimit = 24
            labels = labels.map(lab => lab.slice(5, 16))
        }
        else if (labels.length > 168 && labels.length < 745) {
            maxTicksLimit = 31
            labels = labels.map(lab => lab.slice(5, 10))
        }
        else {
            maxTicksLimit = 3
            labels = labels.map(lab => lab.slice(0, 10))
        }
        const options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        boxHeight: 50,
                        font: {
                            size: 18
                        }
                    },
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            stacked: true,
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                },
                x: {
                    ticks: {
                        autoSkip: true,
                        minRotation: minRotation,
                        maxRotation: maxRotation,
                        maxTicksLimit: maxTicksLimit
                    }
                }
            },
        };

        const data = {
            labels,
            datasets: [
                {
                    label: 'Temperature',
                    data: locationTemp,
                    backgroundColor: 'red',
                    borderColor: 'red',
                    lineTension: 0.5,
                    yAxisID: 'y',
                },
                {
                    label: 'Humidity',
                    data: locationHumidity,
                    backgroundColor: 'blue',
                    borderColor: 'blue',
                    lineTension: 0.5,
                    yAxisID: 'y',
                },
                {
                    label: 'co2',
                    data: locationCo2,
                    backgroundColor: 'purple',
                    borderColor: 'purple',
                    lineTension: 0.5,
                    yAxisID: 'y',
                }
            ]
        }

        return (
            <Card>
                <Grid sx={{ p: 2 }}>
                    <Typography gutterBottom variant="h4" component="div">
                        Graphic measurements
                    </Typography>
                    <CardContent sx={{ height: 800 }}>
                        <Line options={options} data={data} />
                    </CardContent>
                </Grid>
            </Card >
        )
    }

    else return null;
}
