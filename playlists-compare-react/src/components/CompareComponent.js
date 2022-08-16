import { useState } from "react";
import DuplicateService from "../services/DuplicateService";
// import ArtistService from "../services/ArtistService";
import TrackItem from "./TrackItem";

const CompareComponent = (props) => {
  const [data, setData] = useState({
    playlist1: " ",
    playlist2: " ",
  });
  const [tracklists, setTracklists] = useState([]);
  // const [artistlists, setArtistlists] = useState([]);

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

      // ArtistService.getAllArtists(newselectedID.toString())
      // .then((response) => {
      //   setArtistlists(response.data);
      //   console.log(response.data);
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
  };

  return (
    <div className="inputArea">
      <h1>Spotify Playlist Compare</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2> Playlist One </h2>{" "}
        <input
          classname="inputbox"
          type="text"
          name="playlist1"
          onChange={handleChange}
        ></input>
        <h2> Playlist Two </h2>{" "}
        <input
          classname="inputbox"
          type="text"
          name="playlist2"
          onChange={handleChange}
        ></input>
        <h3><button className="button">Let's Find out</button></h3>
      </form>
      <div className="trackSum">
        <div className="trackList">
          {tracklists.map((tracklist) => (
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

export default CompareComponent;
