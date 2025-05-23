import React from 'react';

import Feature from '../../Pages/Feature/Feature';
import Browseservices from '../../Pages/Browseservices/Browseservices';
import Review from '../../Pages/Review/Review';
import Whybest from '../../Pages/Whybest/Whybest';

const Home = () => {
    

    return (
        <div>
          <Feature></Feature>
          <Browseservices></Browseservices>
          <Review></Review>
          <Whybest></Whybest>
        </div>
    );
};

export default Home;