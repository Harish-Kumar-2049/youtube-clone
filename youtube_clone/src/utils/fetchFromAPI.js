const axios = require('axios');

//const BASE_URL = 'https://www.googleapis.com/youtube/v3/';


export const fetchFromAPI = async(url) => {
  const { data } = await axios.get(
    "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBUlx9yYTITAYsK_yWmmpm8TrmZ0uQvhUA&maxWidth=10&part=snippet,contentDetails,statistics&chart=mostPopular&maxResult=40"
  );
  //console.log(responce);
  return data;
}

//default fetchFromAPI;
// const options = {
//   url: 'https://youtube-v31.p.rapidapi.com/search',
//   params: {
//     chart: 'mostPopular',
//     part: 'id,snippet',
//     type: 'video',
//     maxResults: '50'
  