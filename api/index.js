import Fastify from 'fastify'

const app = Fastify({
  logger: true,
})

app.get('/', async (req, reply) => {
  return reply.status(200).type('text/html').send(html)
})

export default async function handler(req, reply) {
  await app.ready()
  app.server.emit('request', req, reply)
}

const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"
    />
    <title>Teste de API</title>
    <meta
      name="description"
      content="This is a starter template for Vercel + Fastify."
    />
  </head>
  <body>
   BEM VINDO AO TESTE DE API
  </body>
</html>
`
