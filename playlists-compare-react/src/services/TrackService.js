import axios from "axios";

const TRACKS_REST_API_URL = "https://guarded-eyrie-34574.herokuapp.com/api/testing";

class TrackService {
  getAllTracks(id) {
    return axios.get(TRACKS_REST_API_URL, {params:{playlistID:id}});
  }
}

export default new TrackService();