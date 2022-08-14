import React from "react";

const PlaylistComponent = (props) => {
  return (
    <div className="container my-5">
      <table className="table table-striped">
        <thead>
          <tr className="columnName">
            <td>Select</td>
            <td>Playlist Name</td>
            <td>#TRACKS</td>
            {/* <td>ID</td> */}
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
              {/* <td>{playlist.ID}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="playlist-sum">
        Playlists Selected: {props.countPlaylists()} 🎸 Tracks Selected:{" "}
        {props.countTracks()}
      </h2>
    </div>
  );
};
export default PlaylistComponent;
