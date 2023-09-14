import fastify from "fastify"
import "dotenv/config"
import cors from '@fastify/cors'
import { PrismaClient } from "@prisma/client";
import { memoriesRoutes } from "./routes/memories";
import { authRoutes } from "./routes/auth";
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import { uploadRoutes } from "./routes/upload";
import { resolve } from "node:path";

const app = fastify()

app.register(multipart)

app.register(require('@fastify/static'), {
    root:resolve(__dirname, '../uploads'), 
    prefix: '/uploads',
})

app.register(cors, {
    origin: true, //todas url de frontend podem acessar o back end
})
app.register(jwt, {
    secret: 'spacetime', //criar token 
})
app.register(authRoutes)
app.register(memoriesRoutes)
app.register(uploadRoutes)

app.listen({ 
    port: 3333,
    host: '0.0.0.0',
}).then(() => {   
    console.log('sucesso - localhost:3333') 
})    