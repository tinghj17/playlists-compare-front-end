import React from "react";

const PlaylistComponent = (props) => {

  
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
          {props.playlists.map((playlist) => (
            <tr key={playlist.ID}>
              <td>
                <input
                  onChange={(event) => {
                    let checked = event.target.checked;
                  props.setPlaylists(
                      props.playlists.map((data) => {
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
      <h2>Playlists Selected: {props.countPlaylists()} 🎸 Tracks Selected: {props.countTracks()}</h2>
      {/* <h2>{props.selectID()}</h2> */}

    </div>
  );
};
export default PlaylistComponent;
