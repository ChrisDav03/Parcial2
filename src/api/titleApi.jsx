import axios from 'axios';


export const titleApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos'
});