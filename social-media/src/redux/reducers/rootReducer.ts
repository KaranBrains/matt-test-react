import { combineReducers } from 'redux';
import { PostState } from '../../types/post';
import postsReducer from "./posts"

export interface RootReducer {
    postsReducer: PostState
}

const rootReducer = combineReducers({ postsReducer });

export default rootReducer;