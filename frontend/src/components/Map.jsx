import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const [route, setRoute] = useState(null);
  const [error, setError] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchRoute = async () => {
    const postData = {
      points: [
        [11.539421, 48.118477],
        [11.559023, 48.12228]
      ],
      snap_preventions: ["motorway", "ferry", "tunnel"],
      details: ["road_class", "surface"],
      profile: "car",
      locale: "en",
      instructions: true,
      calc_points: true,
      points_encoded: false
    };

    try {
      const response = await axios.post('https://graphhopper.com/api/1/route?key=6fa1567f-3670-4e67-999d-268647302358', postData);
      const routeData = response.data.paths[0].points.coordinates;
      const formattedRoute = routeData.map(point => [point[1], point[0]]); // Leaflet needs [lat, lng] format
      setRoute(formattedRoute);
      setCurrentPosition(formattedRoute[0]);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchRoute();
  }, []);

  useEffect(() => {
    if (route && currentIndex < route.length - 1) {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => prevIndex + 1);
        setCurrentPosition(route[currentIndex + 1]);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [route, currentIndex]);

  return (
    <div>
      <h1>Route Map</h1>
      {error && <p>Error: {error}</p>}
      {route && (
        <MapContainer center={[48.118477, 11.539421]} zoom={13} style={{ height: '500px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Polyline positions={route} color="blue" />
          {currentPosition && (
            <Marker position={currentPosition}>
              <Popup>Current Position</Popup>
            </Marker>
          )}
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
