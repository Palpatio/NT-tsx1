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
    LikeCount: number
}

export type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

export type UsersPageType = {
    users: UserType[]
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