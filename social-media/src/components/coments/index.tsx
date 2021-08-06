import * as React from "react"
import { IComment } from "../../types/comment"
import { CommentCard } from "./commentCard"
import "./styles.css"

type Props = {
    comments: IComment[]
}

export const Comments: React.FC<Props> = ({ comments }) => {
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
                <input type="text" className="w-100" />
                <button className="btn btn-secondary add-comment mt-2"> Add Comment </button>
            </div>
        </div>
    )
}