import axios from 'axios';
const options = {
    baseURL:'http://localhost:5174',// "https://tradelendainventoryapi.onrender.com/api",
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    }
  }
export const Axios = axios.create(options)