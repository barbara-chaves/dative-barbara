import React from "react";
import "../styles/details.scss";

const Details = ({ details }) => {
  const { place, type, time, mag } = details;
  const date = new Date(parseInt(time)).toUTCString();
  return Object.keys(details).length ? (
    <div className="details">
      <p className="details__place">Place: {place}</p>
      <p className="details__date">Date: {date}</p>
      <p className="details__date">Type: {type}</p>
      <p className="details__date">Magnitude: {mag}</p>
    </div>
  ) : <div className='empty'>
    <p className='empty__text'>Click a pin to see more details</p>
  </div>;
};

export default Details;
