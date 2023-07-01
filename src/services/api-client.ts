import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'c932b94f24934992b5463c84d518da40'
  }
})