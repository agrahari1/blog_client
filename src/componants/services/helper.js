import axios from 'axios'
export const  BASE_URL= 'localhost:5000/signup';
export const myAxios = axios.create({
    baseURL : BASE_URL
})