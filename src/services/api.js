import axios from 'axios';

const api = axios.create({
    baseURL: 'https://arquivos-backend.herokuapp.com'
});

export default api;