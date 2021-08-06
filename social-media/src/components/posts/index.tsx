import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { getPosts } from "../../redux/actions/posts"
import { Dispatch } from "redux"
import { IPost } from "../../types/post"
import './styles.css'
import { RootReducer } from "../../redux/reducers/rootReducer"

const App: React.FC = () => {

  const posts: readonly IPost[] = useSelector(
    (state: RootReducer) => state?.postsReducer.posts,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  React.useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  return (
    <div className="container">
      <div className="col-lg-8 col-md-9 col-sm-10 col-10 mx-auto my-5">
        <h1>All Posts</h1>
        {posts && posts.length > 0 ? (
          posts.map((p: IPost) => {
            return (
              <div className="card my-5" key={p.id}>
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="card-text">{p.body}</p>
                  <div className="card">
                    <div className="card-body">
                      <input type="text" className="w-100" />
                      <button className="btn btn-secondary add-comment mt-2"> Add Comment </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        ) : ''}
      </div>
    </div>
  )
}

export default App