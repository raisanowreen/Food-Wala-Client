import React from 'react';
import Banner from '../Banner/Banner';
import FoodOptions from '../FoodOptions/FoodOptions';
import FoodWalaApp from '../FoodWalaApp/FoodWalaApp';
import Map from '../Map/Map';
import MapBox from '../MapBox/MapBox';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <MapBox></MapBox>
           <FoodOptions></FoodOptions>
           <FoodWalaApp></FoodWalaApp>
           <Map></Map>
        </div>
    );
};

export default Home;