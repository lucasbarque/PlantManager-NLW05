import axios from 'axios';

const api = axios.create({
  baseURL: 'https://plants-json.herokuapp.com'
});
export default api; 