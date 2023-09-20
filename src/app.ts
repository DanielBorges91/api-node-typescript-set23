import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { transationsRoutes } from './routes/transactions'

export const app = fastify()

app.register(cookie)

// Exemplo de middleare global
// app.addHook('preHandler', async (request) => {
//   console.log(`[${request.method} ${request.url}]`)
// })

app.register(transationsRoutes, {
  prefix: 'transactions',
})
