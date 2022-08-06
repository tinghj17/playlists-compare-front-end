import "./App.css";
import PlaylistComponent from "./components/PlaylistComponent";
import FunctionClick from "./components/FunctionClick";
import React, {useState, useEffect} from "react";
import PlaylistService from "./services/PlaylistService";


function App() {
  const [playlists, setPlaylists] = useState([]);

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
        selectedID.push(playlist.ID)
      }
    }
    return selectedID;
  };



  return (
    <div className="App">
      <header className="App-header">
        <p>Demo</p>
      </header>
      <section>
        {/* <PlaylistComponent></PlaylistComponent> */}
        <PlaylistComponent
        setPlaylists={setPlaylists}
        playlists={playlists}
        countPlaylists={countPlaylists}
        countTracks={countTracks}
        selectID={selectID}
        
        ></PlaylistComponent>
        <FunctionClick></FunctionClick>
        
      </section>
    </div>
  );
}

export default App;
