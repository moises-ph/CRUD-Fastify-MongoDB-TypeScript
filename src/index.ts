import fastify from 'fastify'

const server = fastify()


interface IQuerystring {
  username: string;
  password: string;
}

interface IHeaders {
  "h-Custom": string;
}


server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.get<{QueryString : IQuerystring, Headers : IHeaders}>('/auth', async (request, reply) => {
  const { username, password } = request.query;
  const customerHeader = request.headers["h-Custom"];

  console.log(username + " " + password);
  console.log(customerHeader);
  return "logged in";
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})