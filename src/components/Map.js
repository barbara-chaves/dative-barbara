import React from "react";
import GoogleMapReact from "google-map-react";
import "../styles/map.scss";
import Earthquake from "./Earthquake";
import Details from "./Details";

const Map = ({ earthquakes, selected, handleClick, center }) => {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 1
  };

  const getSelectedPin = id => id === selected.id ? "selected" : "";

  const renderDetails = id => id === selected.id ? <Details details={selected} /> : null;

  const renderEarthQuakes = () => {
    return earthquakes.map(({ coordinates, id, title }) => {
      const { lat, lng } = coordinates;
      return (
        <Earthquake
          key={id}
          lat={lat}
          lng={lng}
          title={title}
          id={id}
          hadleClick={handleClick}
          selectedPin={getSelectedPin(id)}
          renderDetails={renderDetails(id)}
          />
          );
        });
  };
  
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC7T-MBefVa-jF5Q1xoSwvVvWrHMgxUVb8" }}
        defaultCenter={defaultProps.center}
        center={center}
        defaultZoom={defaultProps.zoom}
        >
        
        {renderEarthQuakes()}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
