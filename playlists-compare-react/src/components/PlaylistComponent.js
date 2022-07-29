import React from "react";
import getPlaylists from "../services/PlaylistService";

class PlaylistComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playlists: []
    };
  }

  componentDidMount() {
    this.getData();
  }
  
  getData = () => {
    getPlaylists()
    .then((response) => {
      this.setState({ playlists: response.data });
  })
}

  render() {
    return (
      <div>
        <h1 className="text-center"> Playlists</h1>
        <table className="table table-striped"> 
          <thead>
            <tr>
              <td>ID</td>
              <td>Playlist</td>
            </tr>
          </thead>
          <tbody>
            {this.state.playlists.map((playlist) => (
              <tr key={playlist.id}>
                <td>{playlist.id}</td>
                <td>{playlist.playlistName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PlaylistComponent;
