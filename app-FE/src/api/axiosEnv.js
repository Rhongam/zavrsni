import axios from 'axios';

const apiUrl = "http://localhost:3030";

export default axios.create({
    baseURL: apiUrl,
    headers: {'Content-Type' : "application/json; charset=UTF-8", "Access-Control-Allow-Origin": "http://localhost:3030/"}
})