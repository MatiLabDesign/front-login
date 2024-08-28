import axios from "axios";
import { LOGIN_URL } from "../constants/API_URL";

class LoginService {
  authUser(user) {
    return axios.post(LOGIN_URL, user);
  }
}

export default new LoginService();
