export interface IComment {
  id: number
  postId: number
  name: string
  email: string
  body: string
}

type CommentState = {
  comments: IComment[]
}

type CommentAction = {
  type: string
  comments: IComment[]
}

type DispatchCommentType = (args: GetCommentAction) => GetCommentAction
