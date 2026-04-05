import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Express server
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

// Anda dapat menambahkan Request Interceptor di sini nantinya 
// (misal untuk menyuntikkan token Bearer ke dalam header Authorization)

export default api;
