import { useState } from "react";
import DuplicateService from "../services/DuplicateService";

const CompareComponent = (props) => {
  const [data, setData] = useState({
    playlist1: " ",
    playlist2: " ",
  });
  const [tracklists, setTracklists] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newselectedID = [];
    newselectedID.push(new URL(data.playlist1).pathname.split("/")[2]);
    newselectedID.push(new URL(data.playlist2).pathname.split("/")[2]);
  

  

    console.log("hello " + newselectedID.toString());
    DuplicateService.getAllTracks(newselectedID.toString())
      .then((response) => {
        setTracklists(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1 className="text-center">Spotify Wrapped Compare</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2 className="text-center"> Playlist One </h2>{" "}
        <input type="text" name="playlist1" onChange={handleChange}></input>
        <h2 className="text-center"> Playlist Two </h2>{" "}
        <input type="text" name="playlist2" onChange={handleChange}></input>
        <h2></h2>
        <h2>
          <button>Let's Find out</button>
        </h2>
      </form>
      <h1 className="text-center">Tracks in Common</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Name</td>
            <td>Artist</td>
          </tr>
        </thead>
        <tbody>
          {tracklists.map((tracklist) => (
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

export default CompareComponent;
