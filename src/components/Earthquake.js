import React from "react";
import "../styles/earthquake.scss";

const Earthquake = ({
  lng,
  lat,
  hadleClick,
  id,
  selectedPin,
  renderDetails
}) => {
  return (
    <div className="earthquake" onClick={() => hadleClick(id)}>
      {renderDetails}
      <div
        className={"earthquake__pin " + selectedPin}
        lng={lng}
        lat={lat}
      ></div>
    </div>
  );
};

export default Earthquake;
