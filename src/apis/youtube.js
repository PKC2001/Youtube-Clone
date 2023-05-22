import axios from 'axios';

const KEY = "AIzaSyD6wecsmKRRliRfo8Sp5alOFN1yVqld1bE";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
})