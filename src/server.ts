import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { env } from './env'
import { transationsRoutes } from './routes/transactions'

const app = fastify()

app.register(cookie)
app.register(transationsRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
