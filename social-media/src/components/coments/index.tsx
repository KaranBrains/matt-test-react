import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { getComments } from "../../redux/actions/comments"
import { Dispatch } from "redux"
import { RootReducer } from "../../redux/reducers/rootReducer"
import { IComment } from "../../types/comment"

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
                            <input type="text" className="w-100" value={c.body} readOnly key={c.id}/>
                        )
                    })
                ) : "No Comments Yet"}
                <input type="text" className="w-100" />
                <button className="btn btn-secondary add-comment mt-2"> Add Comment </button>
            </div>
        </div>
    )
}