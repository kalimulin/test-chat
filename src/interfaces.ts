export interface User {
    id: number,
    nickName: string,
    avatarUrl: string
}

export interface Message {
    message: string,
    timestamp: number,
    fromId: number,
    toId: number
}