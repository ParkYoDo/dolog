import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// 1) 요청 바로 직전 - 인자값: axios config
// 2) 요청 에러 - 인자값: error
axiosInstance.interceptors.request.use(
  config => {
    // const accessToken = axios.defaults.headers.common.Authorization;
    // if (accessToken) {
    //   config.headers.Authorization = accessToken;
    // }

    console.log(config.headers);

    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

// 1) 응답 정성 - 인자값: http response
// 2) 응답 에러 - 인자값: http error
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default axiosInstance;
