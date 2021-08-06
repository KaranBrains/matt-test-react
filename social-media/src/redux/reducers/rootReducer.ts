import { combineReducers } from 'redux';
import { CommentState } from '../../types/comment';
import { PostState } from '../../types/post';
import postsReducer from "./posts"
import commentsReducer from "./comments"

export interface RootReducer {
    postsReducer: PostState
    commentsReducer: CommentState
}

const rootReducer = combineReducers({ 
        postsReducer, 
        commentsReducer 
    });

export default rootReducer;