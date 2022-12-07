import React, { useEffect } from 'react';
import MapContent from '../components/mapContent/MapContent';

const Map = () => {
    useEffect(() => {
        document.title = 'Map';
    });
    return (
        <>
            <MapContent />
        </>
    );
};
export default Map;