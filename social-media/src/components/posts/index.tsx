import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { getPosts } from "../../redux/actions/posts"
import { getComments } from "../../redux/actions/comments"
import { Dispatch } from "redux"
import { IPost } from "../../types/post"
import { RootReducer } from "../../redux/reducers/rootReducer"
import { Post } from "./postCard"
import "./styles.css"

const App: React.FC = () => {

  const [filterText, setFilterText] = React.useState<string>("");

  const posts:IPost[] = useSelector(
    (state: RootReducer) => state?.postsReducer.posts,
    shallowEqual
  )

  const filteredItems = posts.filter(
    (post:IPost) =>
      post.body.toLocaleLowerCase().includes(filterText) ||
      post.title.toLocaleLowerCase().includes(filterText)
  );

  const itemsToDisplay: IPost[] = filterText ? filteredItems : posts;

  const dispatch: Dispatch<any> = useDispatch()

  React.useEffect(() => {
    dispatch(getPosts());
    dispatch(getComments());
  }, [dispatch])

  return (
    <div className="container">
      <div className="col-lg-8 col-md-9 col-sm-10 col-10 mx-auto my-5">
        <div className="row">
          <h1 className="col-lg-8 col-md-8 col-sm-6 col-6">All Posts</h1>
          <input 
            className="col-lg-4 col-md-4 col-sm-6 col-6 search-textbox my-auto" 
            type="text" 
            placeholder="Search"
            onChange={(event)=>setFilterText(event.target.value)} />
        </div>
        {itemsToDisplay && itemsToDisplay.length > 0 ? (
          itemsToDisplay.map((p: IPost) => {
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