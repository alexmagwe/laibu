import 'reflect-metadata'
import { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServer } from 'apollo-server-micro'
import { buildSchema } from 'type-graphql'
import Cors from 'cors'
import { resolvers } from '@graphql/index'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// Setup cors
const cors = Cors({
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  credentials: true,
  origin: [
    'https://studio.apollographql.com',
    'http://localhost:8000',
    'http://localhost:3000',
    'https://laibu.vercel.app',
  ],
})

// Middleware to run the cors configuration
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

const schema = await buildSchema({
  resolvers: resolvers,
})

const server = new ApolloServer({
  schema,
  context: () => ({ prisma }),
})

export const config = {
  api: {
    bodyParser: false,
  },
}

const startServer = server.start()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors)
  await startServer
  await server.createHandler({ path: '/api/graphql' })(req, res)
}