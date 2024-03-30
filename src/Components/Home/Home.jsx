import React, { useState } from 'react';
import Map from '../MapBox/mapbox';
import '../Home/Home.css';
import { Link } from 'react-router-dom';
// import CarbonPage from '../CarbonPage/CarbonPage';

const Home = () => {
  const [showMarker, setShowMarkers] = useState(false);
  
  const handleShowMarkers = () => {
    setShowMarkers(true);
  };

  return (
    <div className='home'>
      <div className='upperDiv'>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page content.</p>
      <label>From</label>
      <input type="text" />
      <label>To</label>
      <input type="text" />
      <button onClick={handleShowMarkers}>Submit</button>
      </div>
      <div className='lowerDiv'>
      <Map showMarker={showMarker} />
      <Link to="http://localhost:3002/">
        <button>Know your Carbon Score</button>
      </Link>
      </div>
    </div>
  );
};

export default Home;
