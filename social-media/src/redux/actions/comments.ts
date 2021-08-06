import {
    GET_COMMENTS
} from "../constants";
import * as api from  "../api/index";
import { DispatchCommentType } from "../../types/comment";

export const getComments = () => async ( dispatch: DispatchCommentType ) => {
    try {
        const { data } = await api.getComments();
        dispatch({ type: GET_COMMENTS, comments: data });
    } catch (e) {
        console.log(e);
        alert(e?.response?.data?.msg);
    }
}
