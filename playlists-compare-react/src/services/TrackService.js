import axios from "axios";

const TRACKS_REST_API_URL = "http://localhost:8080/api/testing";

class TrackService {
  getAllTracks(id) {
    return axios.get(TRACKS_REST_API_URL, {params:{playlistID:id}});
  }
}

export default new TrackService();