import {
    PostState,
    GetPostAction
} from "../../types/post";
import {
    GET_POSTS
} from "../constants/index";

const initialState: PostState = {
    posts: []
}

export default (state: PostState = initialState, action: GetPostAction) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action?.posts
            }
        default:
            return {
                ...state
            }
    }
};