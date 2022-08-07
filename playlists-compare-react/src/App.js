import "./App.css";
import PlaylistComponent from "./components/PlaylistComponent";

import React, { useState, useEffect } from "react";
import PlaylistService from "./services/PlaylistService";
import TrackService from "./services/TrackService";
import TrackComponent from "./components/TrackComponent";

function App() {
  const [playlists, setPlaylists] = useState([]);
  const [tracklists, setTracklists] = useState([]);


  useEffect(() => {
    PlaylistService.getAllPlaylists()
      .then((response) => {
        setPlaylists(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const countPlaylists = () => {
    let totalNums = 0;
    for (const playlist of playlists) {
      if (playlist.SELECT === true) {
        totalNums += 1;
      }
    }
    return totalNums;
  };

  const countTracks = () => {
    let totalTracks = 0;
    for (const playlist of playlists) {
      if (playlist.SELECT === true) {
        totalTracks += parseInt(playlist.TRACKS);
      }
    }
    return totalTracks;
  };

  const selectID = () => {
    let selectedID = [];
    for (const playlist of playlists) {
      if (playlist.SELECT === true) {
        selectedID.push(playlist.ID);
      }
    }
    return selectedID;
  };


  // get track info

  // useEffect(() => {
  //   TrackService.getAllTracks("7CdVOjB4q7K2qR1VDS9Bso")
  //     .then((response) => {
  //       setTracklists(response.data);
  //       // console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);



  return (
    <div className="App">
      <header className="App-header">
        <p>Demo</p>
      </header>
      <section>
        <PlaylistComponent
          setPlaylists={setPlaylists}
          playlists={playlists}
          countPlaylists={countPlaylists}
          countTracks={countTracks}
          selectID={selectID}
      
        ></PlaylistComponent>
      
      <TrackComponent
      selectID={selectID}
      tracklists={tracklists}
      setTracklists={setTracklists}

      ></TrackComponent>
      </section>
    </div>
  );
}

export default App;
