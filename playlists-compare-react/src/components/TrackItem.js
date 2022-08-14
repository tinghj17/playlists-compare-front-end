import React from "react";

function TrackItem({ img, trackName, artist }) {
  return (
    <div className="trackItem">
      {/* <div>  {img} </div> */}
      <div style={{ backgroundImage: `url(${img})` }}>
      </div>
      <h1> {trackName} </h1>
      <p> {artist} </p>
    </div>
  );
}
export default TrackItem;
