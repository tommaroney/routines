export type User = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

export type UserAction = {
    type: string,
    payload: User | null
}