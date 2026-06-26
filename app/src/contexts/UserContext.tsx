import { type ActionDispatch, createContext, useReducer } from 'react';
import type { User, UserAction } from '../types/User';
import Navigation from '../components/navigation/Navigation';

export const UserContext = createContext<User | null>(null);
export const UserDispatchContext = createContext<ActionDispatch<[UserAction]>>(() => null as unknown as ActionDispatch<[UserAction]>);

export function UserProvider({ children }: { children: React.ReactNode }) {
    
    const [user, dispatch] = useReducer(userReducer, null);

    return (
        <UserContext value={user}>
            <UserDispatchContext value={dispatch}>
                <Navigation />
            </UserDispatchContext>
            {children}
        </UserContext>
    );
}

export function userReducer(user: User | null, action: UserAction): User | null {
    if (action.type === 'log in')
        // console.log(action.payload);
        if (action.payload)
            return {
                ...action.payload
            };
        else
            return user;

    if (action.type === 'log out') return null;

    return null;
}
