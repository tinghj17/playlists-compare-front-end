import React from "react";
import PlaylistService from "../services/PlaylistService";

class PlaylistComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [],
    };
  }



  componentDidMount() {
    this.getData();
  }

  getData = () => {
    PlaylistService().then((response) => {
      this.setState({ playlists: response.data });
    });
  };

  render() {
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
            {this.state.playlists.map((playlist) => (
              <tr key={playlist.ID}>
                <td>
                  <input
                    onChange={(event) => {
                      let checked = event.target.checked;
                      this.setState(
                        this.state.playlists.map((data) => {
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
        <h2>Playlists Selected: 0</h2>
      </div>
    );
  }
}

export default PlaylistComponent;
