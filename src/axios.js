import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-1b1bb.cloudfunctions.net/api",
  // http://localhost:5001/clone-1b1bb/us-central1/api
});

export default instance;
