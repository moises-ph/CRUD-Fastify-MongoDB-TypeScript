import Fastify from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
// import { AuthUser, AuthUserType } from "./models/AuthUser.schema";

const server = Fastify({
  logger: true,
}).withTypeProvider<TypeBoxTypeProvider>();

// server.get("/ping", async (request, reply) => {
//   return "pong\n";
// });

// server.post<{ Body: AuthUserType }>(
//   "/testAuth",
//   {
//     schema: {
//       body: AuthUser,
//     },
//   },
//   async (request, reply) => {
//     const { username, password } = request.body;

//     console.log(username + " " + password);
//     return "logged in";
//   }
// );

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
