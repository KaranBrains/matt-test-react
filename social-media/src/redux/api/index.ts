import axios from "axios";
import { IPost } from "../../types/post";
export const url = "https://jsonplaceholder.typicode.com";

// Posts 

export const getPosts = () => {
    return axios.get<IPost[]>(`${url}/posts`);
};