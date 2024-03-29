import React from "react";
import "../styles/details.scss";

const Details = ({ details, onCloseDetClick }) => {
  const { place, time, date, mag } = details;
  return Object.keys(details).length ? (
    <div className="details">
      <button className='details__button' onClick={onCloseDetClick}>x</button>
      <p className="details__data"><span>Location: </span>{place}</p>
      <p className="details__data"><span>Date: </span>{date}</p>
      <p className="details__data"><span>Time: </span>{time}</p>
      <p className="details__data"><span>Magnitude: </span>{mag}</p>
    </div>
  ) : null;
};

export default Details;
