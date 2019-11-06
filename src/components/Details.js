import React from "react";
import "../styles/details.scss";

const Details = ({ details }) => {
  const { place, time, mag } = details;

  const newTime = new Date(parseInt(time));
  
  return Object.keys(details).length ? (
    <div className="details">
      <p className="details__data"><span>Location: </span>{place}</p>
      <p className="details__data"><span>Date: </span>{newTime.toLocaleDateString()}</p>
      <p className="details__data"><span>Time: </span>{newTime.toLocaleTimeString()}</p>
      <p className="details__data"><span>Magnitude: </span>{mag}</p>
    </div>
  ) : null;
};

export default Details;
