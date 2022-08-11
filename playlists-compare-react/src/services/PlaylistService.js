import axios from "axios";

const PLAYLISTS_REST_API_URL = "https://guarded-eyrie-34574.herokuapp.com/api/general-info";

// class UserService {
//   getUsers() {
//     axios.get(USERS_REST_API_URL);
//   }
// }

// export default function PlaylistService() {
//   return axios.get(PLAYLISTS_REST_API_URL);
// }

class PlaylistService {
  getAllPlaylists() {
    return axios.get(PLAYLISTS_REST_API_URL);
  }
}

export default new PlaylistService();
