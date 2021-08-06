import * as React from "react"
import { IComment } from "../../types/comment"

type Props = {
    comment: IComment
}

export const CommentCard: React.FC<Props> = ({ comment }) => {

    return (
        <div className="card my-5">
            <div className="card-header">
                <i className="fas fa-user mx-2" />
                <span>{comment.email}</span>
            </div>
            <div className="card-body font-12">
                <h5 className="card-title">{comment.name}</h5>
                <p className="card-text">{comment.body}</p>
            </div>
        </div>
    )
}