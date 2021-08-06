import {
    GET_COMMENTS,
    ADD_COMMENT
} from "../constants";
import * as api from  "../api/index";
import { 
    DispatchCommentType, 
    IComment 
} from "../../types/comment";

export const getComments = () => async ( dispatch: DispatchCommentType ) => {
    try {
        const { data } = await api.getComments();
        dispatch({ type: GET_COMMENTS, comments: data });
    } catch (e) {
        console.log(e);
        alert(e?.response?.data?.msg);
    }
}

export const addComment = (formData:IComment) => async ( dispatch: DispatchCommentType ) => {
    try {
        let comments : IComment[] = [];
        comments.push(formData);
        dispatch({ type: ADD_COMMENT, comments: comments });
    } catch (e) {
        console.log(e);
        alert(e?.response?.data?.msg);
    }
}
