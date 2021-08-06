import {
    CommentState,
    IComment,
    CommentAction
} from "../../types/comment";
import {
    GET_COMMENTS,
    ADD_COMMENT
} from "../constants/index";

const initialState: CommentState = {
    comments: []
}

export default (state: CommentState = initialState, action: CommentAction ) => {
    switch (action.type) {
        case GET_COMMENTS:
            console.log(action?.comments);
            return {
                ...state,
                comments: action?.comments
            }
        case ADD_COMMENT:
            return {
                ...state,
                comments: state.comments.concat(action?.comments[0]),
            }
        default:
            return {
                ...state
            }
    }
};