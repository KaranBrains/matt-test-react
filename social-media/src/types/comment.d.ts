interface IComment {
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
    comment: IComment
  }
  
  type DispatchType = (args: CommentAction) => CommentAction