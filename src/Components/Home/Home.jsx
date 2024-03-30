import React, { useState } from 'react';
import Map from '../MapBox/mapbox';
import '../Home/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [showMarker, setShowMarkers] = useState(false);
  
  const handleShowMarkers = () => {
    setShowMarkers(true);
  };

  return (
    <div className="home">
      <div className="upperDiv">
        {/* <img src='../Assets/660838.png'/> */}
        <h1>Welcome to the Home Page</h1>
        <p>Track charging dock</p>
        <label>From</label>
        <input type="text" />
        <label>To</label>
        <input type="text" />
        <button onClick={handleShowMarkers}>Submit</button>
      </div>
      <div className="lowerDiv">
        <Map showMarker={showMarker} />
        <div class="button-container">
          <Link to="/slot" className="book-slot">
            <button className="button1">Book Your SLOT Now</button>
          </Link>
          <Link to="http://localhost:3000/" className="know-score">
            <button className="button2">Know your Carbon Score</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
