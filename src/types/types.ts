export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type PostType = {
    id: number
    postMessage: string
    likeCount: number
}


export type UsersType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: {
        small: string | undefined
        large: string | undefined
    }
    status: string | null
    followed: boolean


}

export type UsersPageType = {
    currentPage: number
    pageSize: number,
    totalUsersCount:number,
    items: UsersType[]
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType= {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}