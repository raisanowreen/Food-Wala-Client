import React from 'react';
import Banner from '../Banner/Banner';
import FoodOptions from '../FoodOptions/FoodOptions';
import FoodWalaApp from '../FoodWalaApp/FoodWalaApp';
import MapBox from '../MapBox/MapBox';


const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <FoodOptions></FoodOptions>
           <MapBox></MapBox>
           <FoodWalaApp></FoodWalaApp>
        </div>
    );
};

export default Home;