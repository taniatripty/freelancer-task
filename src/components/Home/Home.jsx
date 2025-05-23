import React from 'react';

import Feature from '../../Pages/Feature/Feature';
import Browseservices from '../../Pages/Browseservices/Browseservices';
import Review from '../../Pages/Review/Review';
import Whybest from '../../Pages/Whybest/Whybest';
import Banner from '../../Pages/Banner/Banner';

const Home = () => {
    

    return (
        <div>
          <Banner></Banner>
          <Feature></Feature>
          <Browseservices></Browseservices>
          <Review></Review>
          <Whybest></Whybest>
        </div>
    );
};

export default Home;