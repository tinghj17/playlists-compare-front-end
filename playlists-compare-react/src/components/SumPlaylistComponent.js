import React, { useState, useEffect } from "react";
import PlaylistService from "../services/PlaylistService";

const SumPlaylistComponent = () => {
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


  return (
    <div>
      <h1 className="text-center">Playlists</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Select</td>
            <td>Name</td>
            <td>#TRACKS</td>
            <td>ID</td>
          </tr>
        </thead>
        <tbody>
          {playlists.map((playlist) => (
            <tr key={playlist.ID}>
              <td>
                <input
                  onChange={(event) => {
                    let checked = event.target.checked;
                    setPlaylists(
                      playlists.map((data) => {
                        if (data.ID === playlist.ID) {
                          data.SELECT = checked;
                        }
                        return data;
                      })
                    );
                  }}
                  type="checkbox"
                  checked={JSON.parse(playlist.SELECT)}
                ></input>
              </td>
              <td>{playlist.NAME}</td>
              <td>{playlist.TRACKS}</td>
              <td>{playlist.ID}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Playlists Selected: {countPlaylists()} 🎸 Tracks Selected: {countTracks()}</h2>

    </div>
  );
};
export default SumPlaylistComponent;
