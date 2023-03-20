import axios from 'axios';

const api = axios.create({
  // this is environment variable defined in `.env.development` and `.env-production`
  baseURL: import.meta.env.VITE_API,
});

// Add access token
// const token = localStorage.getItem('user/token');
// api.interceptors.request.use((config) => {
//   if (!token) { return config; }

//   if (config.method === 'get') {
//     config.params = {
//       ...config.params,
//       token,
//     };
//   } else if (config.method === 'post') {
//     config.data = {
//       ...config.data,
//       token,
//     };
//   }

//   return config;
// });

export {
  api,
};

export default api;
