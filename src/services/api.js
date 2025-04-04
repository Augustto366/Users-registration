import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-users-production.up.railway.app/'
});

export default api;