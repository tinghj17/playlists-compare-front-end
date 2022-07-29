import axios from "axios";

const USERS_REST_API_URL = "http://localhost:8080/api/users";

// class UserService {
//   getUsers() {
//     axios.get(USERS_REST_API_URL);
//   }
// }

export default function getUsers() {
  return axios.get(USERS_REST_API_URL);
}
