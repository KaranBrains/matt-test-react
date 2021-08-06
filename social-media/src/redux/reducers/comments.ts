import {
    CommentState,
    GetCommentAction
} from "../../types/comment";
import {
    GET_COMMENTS
} from "../constants/index";

const initialState: CommentState = {
    comments: []
}

export default (state: CommentState = initialState, action: GetCommentAction) => {
    switch (action.type) {
        case GET_COMMENTS:
            console.log(action?.comments);
            return {
                ...state,
                comments: action?.comments
            }
        default:
            return {
                ...state
            }
    }
};