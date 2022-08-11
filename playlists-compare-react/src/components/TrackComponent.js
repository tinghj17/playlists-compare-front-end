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

      {/* <h2>{props.selectID()}</h2> */}
      <h1 className="text-center">Tracks in Common</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Name</td>
            <td>Artist</td>
          </tr>
        </thead>
        <tbody>
          {props.tracklists.map((tracklist) => (
            <tr>
              <td>{tracklist.TRACKNAME}</td>
              <td>{tracklist.ARTIST}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrackComponent;
