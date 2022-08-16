import axios from "axios";

const TRACKS_REST_API_URL = "https://guarded-eyrie-34574.herokuapp.com/api/compareAdvanced";

class ArtistService {
  getAllArtists(id) {
    return axios.get(TRACKS_REST_API_URL, { params: { params: id } });
  }
}

export default new ArtistService();
