import React from 'react';
import "../Home/slot.css";

const Slot = () => {
  return (
    <div className="slot-container">
      <div className="stations-list">
        <h2>All Stations</h2>
        <div className="charging-stations">
          <div className="station">
            <div className="station-details">
              <h3>Station Name 1</h3>
              <p>
                <i className="fas fa-map-marker-alt"></i> Address: 123 Main St,
                City, Country
              </p>
              <p>
                <i className="fas fa-phone"></i> Contact: +1234567890
              </p>
              <p>
                <i className="fas fa-route"></i> Route: Directions
              </p>
              <p>
                <i className="far fa-clock"></i> Waiting Time: 10 mins
              </p>
            </div>
            <button className="btn">Navigate</button>
          </div>
          <div className="station">
            <div className="station-details">
              <h3>Station Name 1</h3>
              <p>
                <i className="fas fa-map-marker-alt"></i> Address: 123 Main St,
                City, Country
              </p>
              <p>
                <i className="fas fa-phone"></i> Contact: +1234567890
              </p>
              <p>
                <i className="fas fa-route"></i> Route: Directions
              </p>
              <p>
                <i className="far fa-clock"></i> Waiting Time: 10 mins
              </p>
            </div>
            <button className="btn">Navigate</button>
          </div>
          
        </div>
      </div>

      <div className="recommended-stations">
        <h2>Recommended Stations</h2>
        <div className="charging-stations">
          <div className="station">
            <div className="station-details">
              <h3>Recommended Station 1</h3>
              <p>
                <i className="fas fa-map-marker-alt"></i> Address: 456 Oak St,
                City, Country
              </p>
              <p>
                <i className="fas fa-phone"></i> Contact: +0987654321
              </p>
              <p>
                <i className="fas fa-route"></i> Route: Directions
              </p>
              <p>
                <i className="far fa-clock"></i> Waiting Time: 10 mins
              </p>
            </div>
            <button className="btn">Navigate</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slot