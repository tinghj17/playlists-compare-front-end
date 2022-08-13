// import React from "react";
import DuplicateService from "../services/DuplicateService";

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
      >
        Compare
      </button>


      <div>
          {props.tracklists.map((tracklist) => (
            <ul>
              <li>{tracklist.TRACKNAME}</li>
              <li>{tracklist.ARTIST}</li>
              <li><img src={tracklist.IMG}/></li>
              </ul>
          ))}
          </div>
      
    
    </div>
  );
};

export default TrackComponent;
