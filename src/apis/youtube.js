import axios from "axios";
const KEY = "AIzaSyA6XBsbSrydYoQ5WjY9wwp3BZDhmLJZvo4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
