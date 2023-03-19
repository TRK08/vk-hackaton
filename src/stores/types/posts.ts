export type comment = {
  text: string
  score: number
}

export type post = {
  text: string
  comments: comment[]
}
export interface IPosts {
  posts: post[] | null
  currentPost: post | null
}
