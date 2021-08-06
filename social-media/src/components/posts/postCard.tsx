import * as React from "react"
import { IPost } from "../../types/post"
import { useSelector, shallowEqual } from "react-redux"
import { RootReducer } from "../../redux/reducers/rootReducer"
import { IComment } from "../../types/comment"
import { Comments } from "../coments"

type Props = {
    post: IPost
}

export const Post: React.FC<Props> = ({ post }) => {

    const [associatedComments, setAssociatedComments] = React.useState<IComment[]>([])

    const [showComments, setShowComments] = React.useState<boolean>(false)

    const comments: readonly IComment[] = useSelector(
        (state: RootReducer) => state?.commentsReducer.comments,
        shallowEqual
    )

    const handleShowClick = (id: number) => {
        setAssociatedComments(comments.filter((c: IComment) => c.postId === id));
        setShowComments(!showComments);
    }

    return (
        <div className="card my-5 post-card">
            <div className="card-body">
                <div onClick={() => handleShowClick(post.id)} className="mb-2 hoverable text-black">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                </div>
                {showComments ? (
                    <>
                        <p onClick={() => setShowComments(false)} className="hoverable" >Hide All Comments</p>
                        <Comments comments={associatedComments} id={comments.length} />
                    </>
                ) : <p onClick={() => handleShowClick(post.id)} className="hoverable" >Show All Comments</p> }
            </div>
        </div>
    )
}