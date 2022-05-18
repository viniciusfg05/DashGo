import { createServer, Factory, Model, Response } from "miragejs"
import { faker } from '@faker-js/faker';

interface User {
    name: string;
    email: string;
    created_at: string;
}

export function makeServer() {
    
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({}) //Partial torna os capos opcionais 
        },

        // gerar dados em massa
        factories: {
            user: Factory.extend({
                name(i: number) {
                    // resturn Vinicius Ferreira -> todos os usuario seria esse nome
                    return `User ${i + 1}` // user 1; user 2 é assim por diante 
                },
                email() {
                    return faker.internet.email().toLowerCase()
                },
                createdAt() {
                    return faker.date.recent(10) // usuario criandos nos ultimos 10 dias
                },
            })
        },

        seeds(server) {
            server.createList('user', 200)// cria 200 usuarios
        },

        routes() {
            this.namespace = 'api' // -> ../api/rota 
            this.timing = 750; 

            this.get('/users', function (schema, request) {
                const { page = 1, perPage = 10 } = request.queryParams // se passar para a pagia 3 

                const total = schema.all('user').length

                const pageStart = ( Number(page) - 1) * Number(perPage)// menos 1 igual a 2 * 10 = page 3 vai começar do 20 para o 30
                const pageEnd = pageStart + Number(perPage)

                const users = this.serialize(schema.all('user')).users.splice(pageStart, pageEnd)

                return new Response(
                    200, //sucesso
                    { 'x-total-count':  String(total) },
                    { users }
                )
            })
            this.post('/users')
            this.post('/sessions')

            this.namespace = ''; // para não prejudica a rotas "api" do next -> ../pages/api/rota
            this.passthrough('http://localhost:5555/**') // todas as api passa pelo mirage e se não forem detectadas, passem adiante para rota original
        }

    })

    return server;
}