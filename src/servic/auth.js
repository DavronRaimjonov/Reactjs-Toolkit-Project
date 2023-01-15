import axios from "./api";

const AuthServie = {
  async userRegistr(user) {
    const response = await axios.post("/users", { user });
    return response.data;
  },
  async userLogin(user) {
    const response = await axios.post("/users/login", { user });
    return response.data;
  },
  async getUser() {
    // const response = await axios.post("/user");
  },
};
export default AuthServie;
