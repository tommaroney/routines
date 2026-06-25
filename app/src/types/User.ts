export type User = {
    id: number;
    firstName: string;
    lastName: string;
}

export type UserAction = {
    type: string,
    payload: User
}