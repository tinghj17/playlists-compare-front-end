// import React from "react";
import TrackService from "../services/TrackService";

const TrackComponent = (props) => {
  
  // let chooseid = props.selectID();

  const fetchTracks = (id) => {
    console.log("hello " + id);
      TrackService.getAllTracks(id)
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
          // fetchTracks("7CdVOjB4q7K2qR1VDS9Bso");
        }}
      >
        Playlist Details
      </button>

      <h2>{props.selectID()}</h2>
      <h1 className="text-center">Tracks</h1>
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
