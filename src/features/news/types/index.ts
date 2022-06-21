export interface newsType{
    totalCount: number,
    posts: Array<PostType>
}
export interface PostType{
    id: number,
    title: string,
    description: string,
    createData: string
}