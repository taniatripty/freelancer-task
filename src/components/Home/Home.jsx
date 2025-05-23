import React from 'react';

import Feature from '../../Pages/Feature/Feature';
import Browseservices from '../../Pages/Browseservices/Browseservices';
import Review from '../../Pages/Review/Review';

const Home = () => {
    

    return (
        <div>
          <Feature></Feature>
          <Browseservices></Browseservices>
          <Review></Review>
        </div>
    );
};

export default Home;