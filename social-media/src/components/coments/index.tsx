import * as React from "react"
import { IComment } from "../../types/comment"
import { CommentCard } from "./commentCard"
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
import "./styles.css"
import { addComment } from "../../redux/actions/comments"

type Props = {
    comments: IComment[],
    id : number
}

export const Comments: React.FC<Props> = ({ comments , id }) => {

    const dispatch: Dispatch<any> = useDispatch()

    const initialState: IComment = {
        postId: comments[0].postId,
        name: "",
        id: id+1,
        body: "",
        email: ""
    }

    const [newComment, setNewComment] = React.useState<IComment>(initialState)

    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        dispatch(addComment(newComment));
        comments.push(newComment)
        setNewComment(initialState);
    }

    return (
        <div className="card">
            <div className="card-body">
                {comments && comments.length > 0 ? (
                    comments.map((c: IComment) => {
                        return (
                            <CommentCard comment={c} key={c.id} />
                        )
                    })
                ) : "No Comments Yet"}
                <form onSubmit={(event)=>handleSubmit(event)}>
                    <input 
                        type="email" 
                        className="w-100 mb-1" 
                        placeholder="Email ID"
                        name="email" 
                        value={newComment.email} 
                        onChange={(event)=>{
                            setNewComment({
                                ...newComment,
                                [event.target.name] :event.target.value
                            });
                        }}/>
                    <input 
                        type="text" 
                        className="w-100 mb-1" 
                        placeholder="Comment Name"
                        name="name" 
                        value={newComment.name} 
                        onChange={(event)=>{
                            setNewComment({
                                ...newComment,
                                [event.target.name] :event.target.value
                            });
                        }}/>
                    <textarea 
                        className="w-100 mb-1" 
                        placeholder="Comment Body"
                        name="body" 
                        value={newComment.body} 
                        onChange={(event)=>{
                            setNewComment({
                                ...newComment,
                                [event.target.name] :event.target.value
                            });
                        }}/>
                    <button className="btn btn-secondary add-comment mt-2" type="submit"> Add Comment </button>
                </form>
            </div>
        </div>
    )
}