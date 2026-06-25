import { createContext, type ActionDispatch } from "react";
import type { User, UserAction } from "../types/User";

export const UserContext = createContext<User | null>(null);
export const UserDispatchContext = createContext<ActionDispatch<[action: any]> | null>(null);

export function UserProvider({ children, user }: { children: React.ReactNode, user: User | null }) {
    return (
        <UserContext value={user}>
            {children}
        </UserContext>
    );
}

export function UserDispatchProvider({ children, dispatch }: { children: React.ReactNode, dispatch: ActionDispatch<[action: any]> }) {
    return (
        <UserDispatchContext value={dispatch}>
            {children}
        </UserDispatchContext>
    );
}

export function userReducer(user: User | null, action: UserAction): User | null {
    if (action.type === 'log in')
        return { ...action.payload };

    if (action.type === 'log out') return null;

    return null;
}
