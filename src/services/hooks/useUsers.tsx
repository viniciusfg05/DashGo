import { useQuery } from "react-query"
import { api } from "../mirage/api"

interface User {
    id: string;
    name: string;
    email: string;
    createdAt: string;
}

export async function getUsers(): Promise<User[]> { //Promise pq é async
    const { data } = await api.get('users')
    const users = data.users.map(user => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })
    return users
}

export function useUsers() {
    return useQuery('users', getUsers, {
        staleTime: 1000 * 5 // 5 segundos
    }) //chave do cache onde os dados vai ficar armazenado
}