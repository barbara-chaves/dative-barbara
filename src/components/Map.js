import React from 'react';
import GoogleMapReact from 'google-map-react';

import Earthquake from './Earthquake'


const Map = ({earthquakes, handleClick}) => {

  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 1
  };
  
  const renderEarthQuakes = () => {
    return earthquakes.map(({coordinates, id, title}) => {
      const {lat, lng} = coordinates;
      return(
        <Earthquake key={id} lat={lat} lng={lng} title={title} id={id} hadleClick={handleClick}/>
      )
    })
  }
 
    return (
      <div style={{ height: '100vh', width: '70%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC7T-MBefVa-jF5Q1xoSwvVvWrHMgxUVb8' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
         {renderEarthQuakes()}
         
        </GoogleMapReact>
      </div>
    );
  
}
 
export default Map;