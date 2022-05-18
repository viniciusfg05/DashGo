import Router from "next/router";
import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";

interface User {
    email: string;
    permissions: string[];
    roles: string[];
}

interface SignInCredentials {
    email?: string;
    password?: string;
}

interface AuthContextData {
    signIn: (credentials: SignInCredentials)  => Promise<void>
    isAuthenticated: boolean;
}

export const AuthContext = createContext({} as AuthContextData)

interface  AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [ user, setUser ] = useState<User>()
    const isAuthenticated = false

    async function signIn({ email, password }: SignInCredentials) {
        console.log('oii')
        // console.log(email, password)
        const response = await api.get('me')
        console.log(response.data)

            // const { permissions, roles } = response.data
    
            // setUser({
            //     email,
            //     permissions,
            //     roles
            // })


            console.log(user)
    }

    return (
        <AuthContext.Provider value={{ signIn, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}