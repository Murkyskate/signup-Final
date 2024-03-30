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
        [-74.5, 40],
        [-73.9964, 40.729],
        [-73.9963, 40.7288],
        [-73.996, 40.7286],
        [-73.9965, 40.7292]
      ].map((lngLat, index) => {
        const marker = new mapboxgl.Marker().setLngLat(lngLat).addTo(map);
        const popup = new mapboxgl.Popup({ offset: 25 }).setText(
          'Yhaan hardcode data dena hoga dekh koi wikipedia ki api hoto dekhle'
        );
        marker.setPopup(popup);
        return marker;
      });
    }

    return () => {
      markers.forEach(marker => marker.remove());
      map.remove();
    };
  }, [showMarker]);

  return <div ref={mapContainer} style={{ width: '100%', height: '500px' }}/>;
};

export default Map;


/**
 * const obj = markers[index]._lngLat;
          const coordinates = Object.keys(obj).map((key) => obj[key]);
          console.log(coordinates);
          const description = "Hello World";

          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.

          new mapboxgl.Popup()
              .setLngLat(coordinates)
              .setHTML(description)
              .addTo(map);
 */