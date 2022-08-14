// import React from "react";
import DuplicateService from "../services/DuplicateService";
import TrackItem from "./TrackItem";

const TrackComponent = (props) => {
  // let chooseid = props.selectID();

  const fetchTracks = (playlistIds) => {
    console.log("hello " + playlistIds);
    DuplicateService.getAllTracks(playlistIds)

      .then((response) => {
        props.setTracklists(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button
        onClick={() => {
          fetchTracks(props.selectID());
        }}
        className="button"
      >
        Click here to compare
      </button>

      <div className="trackSum">
        <div className="trackList">
          {props.tracklists.map((tracklist) => (
            <TrackItem
              trackName={tracklist.TRACKNAME}
              artist={tracklist.ARTIST}
              img={tracklist.IMG}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackComponent;
