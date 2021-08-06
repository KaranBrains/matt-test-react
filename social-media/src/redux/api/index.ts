import axios from "axios";
import { IComment } from "../../types/comment";
import { IPost } from "../../types/post";
export const url = "https://jsonplaceholder.typicode.com";

// Posts 

export const getPosts = () => {
    return axios.get<IPost[]>(`${url}/posts`);
};

// Comments

export const getComments = () => {
    return axios.get<IComment[]>(`${url}/comments`);
};