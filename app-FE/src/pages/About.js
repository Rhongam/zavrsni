import React, { useEffect } from 'react';
import { Card, CardActions, CardContent, Grid, Typography } from '@mui/material';

const About = () => {
    useEffect(() => {
        document.title = 'About';
    });
    return (
        <Grid container spacing={1} sx={{ p: 1 }}>
            <Grid item sm={12}>
                <Card>
                    <CardContent >
                        <Typography variant="h2" align='center' sx={{ pt: 5 }} color="#1976d2">
                            Air Quality Control
                        </Typography>
                        <Typography variant="h5" sx={{ padding: 10 }} >
                            This paper will describe the development of a web application for air quality control. 5 measuring points in the city of Split have been determined, according to which the data will be presented tabularly and graphically. The values that are measured are temperature, humidity and the percentage of moisture in the air. "Air Quality Control" application created in JavaScript programming language, HTML presentation language and CSS style language. A combination of several JavaScript libraries was used to create the application interface, of which React and MaterialUI libraries should be singled out. The backend service is based on the Express application environment and the Node.js runtime environment. The MongoDB database program was used for data storage. Technologies MongoDB, Express, React and Node.js together form the so-called "MERN stack". The measurements that were used in the creation of this work are based on the measurements of my colleague Ante Botica in his final work "Wireless sensor network for measuring air quality".
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={12}>
                <Card>
                    <CardActions>
                        <Typography variant="h5" >
                            University
                        </Typography>
                    </CardActions>
                    <CardContent>
                        <Typography variant="h4" color="#1976d2">
                            University of Split Department of Professional Studies
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={6}>
                <Card>
                    <CardActions>
                        <Typography variant="h5" >
                            Mentor
                        </Typography>
                    </CardActions>
                    <CardContent>
                        <Typography variant="h4" color="#1976d2">
                            dr. sc. Tonko Kovačević
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={6}>
                <Card>
                    <CardActions>
                        <Typography variant="h5" >
                            Author
                        </Typography>
                    </CardActions>
                    <CardContent>
                        <Typography variant="h4" color="#1976d2">
                            Dino Krstulović
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};
export default About;