import axios from "axios";

const API = axios.create({
    baseURL:"https://smart-lynk-backend.onrender.com",
});

export default API;