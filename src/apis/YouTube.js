import axios from 'axios';

const KEY = 'AIzaSyCPhk_J_A4ply8qxuFNdD7L-a15BAbiLV8';
 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});