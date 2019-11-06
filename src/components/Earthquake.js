import React from "react";
import '../styles/earthquake.scss'

const Earthquake = ({lng, lat, title, hadleClick, id}) => {
  return (
  <div className='earthquake' lng={lng} lat={lat} onClick={ () => hadleClick(id)}>
    <div className='earthquake__title'>{title}</div>
  </div>);
};

export default Earthquake;
