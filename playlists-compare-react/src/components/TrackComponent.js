import React from "react";
import TrackService from "../services/TrackService";
import DuplicateService from "../services/DuplicateService";
import TrackItem from "./TrackItem";

const TrackComponent = (props) => {
  const fetchDetails = (playlistId) => {
    // console.log("hello " + playlistId);
    TrackService.getAllTracks(playlistId)
      .then((response) => {
        props.setTracklists(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchTracks = (playlistIds) => {
    // console.log("hello " + playlistIds);
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
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-6">
            <button
              onClick={() => {
                fetchDetails(props.selectID());
              }}
              className="buttonDetails"
            >
              Check playlist details
            </button>
          </div>
          <div class="col-12 col-sm-6 col-md-6">
            <button
              onClick={() => {
                fetchTracks(props.selectID());
              }}
              className="button"
            >
              Find tracks in common
            </button>
          </div>
        </div>
      </div>
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
