export interface User {
    id: number,
    nickname: string,
    avatarUrl: string
}

export interface Message {
    message: string,
    timestamp: number,
    fromId: number,
    toId: number
}