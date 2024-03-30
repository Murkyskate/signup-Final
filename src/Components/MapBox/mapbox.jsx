import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
// import { DATA } from '../../config';
mapboxgl.accessToken = 'pk.eyJ1Ijoia3ByOCIsImEiOiJjbHU3YXEzemYwM2lkMmtuM2I4YXBsZHE2In0.53Z886WzFdtQjXLkPJeg2Q';

const Map = ({ showMarker }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40],
      zoom: 9,
    });

    let markers = [];

    if (showMarker) {
      markers = [
        [-73.9930, 40.729],
        [-73.9890, 40.7288],
        [-73.9845, 40.7286],
        [-73.9965, 40.7292]
      ].map((lngLat, index) => {
        const marker = new mapboxgl.Marker().setLngLat(lngLat).addTo(map);
        const popup = new mapboxgl.Popup({ offset: 25 }).setText(`
          Station: SuperChargeV1.0
          Address: NY STREET, 25TH AVN, NEW YORK UNIVERSITY CAMPUS
          CALL ON: +00 67X89X3839
        `);
        marker.setPopup(popup);
        return marker;
      });
    }

    return () => {
      markers.forEach(marker => marker.remove());
      map.remove();
    };
  }, [showMarker]);

  return <div ref={mapContainer} style={{ width: '100%', height: '800px' }}/>;
};

export default Map;
