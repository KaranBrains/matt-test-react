import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { getPosts } from "../../redux/actions/posts"
import { getComments } from "../../redux/actions/comments"
import { Dispatch } from "redux"
import { IPost } from "../../types/post"
import './styles.css'
import { RootReducer } from "../../redux/reducers/rootReducer"
import { IComment } from "../../types/comment"
import { Post } from "./postCard"

interface ShowComment {
  id: number
  show: boolean
} 

const App: React.FC = () => {

  const posts: readonly IPost[] = useSelector(
    (state: RootReducer) => state?.postsReducer.posts,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  React.useEffect(() => {
    dispatch(getPosts());
    dispatch(getComments());
  }, [dispatch])

  return (
    <div className="container">
      <div className="col-lg-8 col-md-9 col-sm-10 col-10 mx-auto my-5">
        <h1>All Posts</h1>
        {posts && posts.length > 0 ? (
          posts.map((p: IPost) => {
            return (
              <Post post={p} key={p.id} />
            )
          })
        ) : ''}
      </div>
    </div>
  )
}

export default App