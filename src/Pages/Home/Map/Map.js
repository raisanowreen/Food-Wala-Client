import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl'; 
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

 
mapboxgl.accessToken = 'pk.eyJ1IjoicmFpc2FucHJvbWUiLCJhIjoiY2t2ZW51anh4M3Q0ZTJ1cXBxaGxxeXplaiJ9.bmpKo4cTexwmDljt32JXoQ';

const Map = () => {
    useEffect(() =>{
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-79.4512, 43.6568],
            zoom: 13
            });
             
            map.addControl(
            new MapboxDirections({
            accessToken: mapboxgl.accessToken
            }),
            'top-left'
            );
    },[])
    return (
        <div>

           <div id="map"></div>

        </div>
    );
};

export default Map;