import axios from 'axios';

const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "text/plain",
    },
  };
  const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/trending/movie/week?api_key=e36d136286caab4f10d61215e05eff82",
    https: config,
      }
  );


  export default instance;

// export default axios.create({
//     baseURL:"https://developers.themoviedb.org/3/trending/movie/week?api_key=", headers:{'Content-Type': 'text/plain'}
// })