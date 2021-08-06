import {
    GET_POSTS
} from "../constants";
import * as api from  "../api/index";
import { DispatchPostType } from "../../types/post";

export async function getPosts( dispatch: DispatchPostType) {
    try {
        const { data } = await api.getPosts();
        dispatch({ type: GET_POSTS, posts: data });
    } catch (e) {
        console.log(e);
        alert(e?.response?.data?.msg);
    }
}
