import fastify from "fastify"
import "dotenv/config"
import cors from '@fastify/cors'
import { PrismaClient } from "@prisma/client";
import { memoriesRoutes } from "./routes/memories";
import { authRoutes } from "./routes/auth";
import jwt from '@fastify/jwt'

const app = fastify()

app.register(cors, {
    origin: true, //todas url de frontend podem acessar o back end
})
app.register(jwt, {
    secret: 'spacetime', //criar token 
})
app.register(authRoutes)
app.register(memoriesRoutes)

app.listen({ 
    port: 3333,
}).then(() => {   
    console.log('sucesso') 
})    