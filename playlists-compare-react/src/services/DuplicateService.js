import axios from "axios";

const TRACKS_REST_API_URL = "http://localhost:8080/api/compareAdvanced";

class DuplicateService {
  getAllTracks(id) {
    return axios.get(TRACKS_REST_API_URL, { params: { params: id } });
  }
}

export default new DuplicateService();
