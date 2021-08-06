export interface IPost {
    id: number
    userId: number
    title: string
    body: string
}

type PostState = {
    posts: IPost[]
}

type GetPostAction = {
    type: string
    posts: IPost[]
}

type DispatchPostType = (args: GetPostAction) => GetPostAction