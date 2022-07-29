import axios from "axios";

const PLAYLISTS_REST_API_URL = "http://localhost:8080/api/playlists";

// class UserService {
//   getUsers() {
//     axios.get(USERS_REST_API_URL);
//   }
// }

export default function getPlaylists() {
  return axios.get(PLAYLISTS_REST_API_URL);
}
