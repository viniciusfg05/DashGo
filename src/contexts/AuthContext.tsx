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
    value?: []
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



    async function signIn({ email, password, value }: SignInCredentials) {
        console.log(user)
        console.log('user1')
        try {
            //chmanda de autenticação
            const response = await api.post('sessions', {
              email,
              password
            })

            console.log(response.data)

            const { token, refreshToken, permissions, roles } = response.data 

            setUser({
                email,
                permissions,
                roles
            })
            

            Router.push('/dashboard')
          } catch (err) {
            console.log(err),
            console.log("error")
          }
        }

    return (
        <AuthContext.Provider value={{ signIn, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}