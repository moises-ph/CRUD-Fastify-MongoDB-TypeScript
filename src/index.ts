import Fastify from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import "./utils/mongoose"; 
import { routes } from "./routes/product.routes";
import { ProducType, IQueryStringType  } from "./validations/product.validation";

const server = Fastify({
  logger: true,
}).withTypeProvider<TypeBoxTypeProvider>();

server.get("/ping", async (request, reply) => {
  return "pong\n";
});

routes.map((route, index) => {
  switch (route.method){
    case 'GET':
      index == 0 ? server.get(route.url ,route.handler) : server.get<{ Params : IQueryStringType}>(route.url, { schema : route.schema}, route.handler);
      break;
    case 'POST':
      server.post<{ Body : ProducType }>(route.url, { schema : route.schema }, route.handler);
      break;
    case 'PUT':
      server.put<{ Params : IQueryStringType , Body : ProducType }>(route.url, { schema : route.schema } , route.handler);
      break;
    case 'DELETE':
      server.delete<{ Params : IQueryStringType }>(route.url, { schema : route.schema }, route.handler);
      break;
  }
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
