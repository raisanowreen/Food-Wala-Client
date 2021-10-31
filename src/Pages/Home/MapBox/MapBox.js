import React from 'react';
import Map from '../Map/Map';
import './MapBox.css';

const MapBox = () => {
    return (
        <div className="custom-position bg-white pb-5">
            <h1 className="text-center bg-white text-warning pb-5 pt-1">Select Your Location</h1>
            <img className="mt-5" src="https://i.ibb.co/v1FFryZ/MDSFD.png" height="200" alt="" />
            <Map></Map>
        </div>
    );
};

export default MapBox;