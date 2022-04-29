import { createServer, Model } from "miragejs"

interface User {
    name: string;
    email: string;
    create_at: string;
}

export function makeServer() {
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({}) //Partial torna os capos opcionais 
        },

        routes() {
            this.get('/users')
            this.post('/users')
        }
    })
}