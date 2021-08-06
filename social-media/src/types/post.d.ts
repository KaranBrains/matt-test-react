interface IPost {
    id: number
    userId: number
    title: string
    body: string
  }
  
  type PostState = {
    posts: IPost[]
  }
  
  type PostAction = {
    type: string
    post: IPost
  }
  
  type DispatchType = (args: PostAction) => PostAction