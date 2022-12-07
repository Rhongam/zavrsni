import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import Locations from './Locations';
import LocationDetails from './LocationDetails';
import Map from './Map'
import About from './About';
import Layout from '../components/Layout';

const Pages = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/locations" element={<Locations />} />
                    <Route path="/locations/karepovac" element={<LocationDetails />} />
                    <Route path="/locations/marjan" element={<LocationDetails />} />
                    <Route path="/locations/poljud" element={<LocationDetails />} />
                    <Route path="/locations/vranjic" element={<LocationDetails />} />
                    <Route path="/locations/znjan" element={<LocationDetails />} />
                    <Route path="/map" element={<Map />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Layout>
        </Router>
    );
};
export default Pages;