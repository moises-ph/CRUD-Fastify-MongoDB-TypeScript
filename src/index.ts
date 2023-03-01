import Fastify from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import "./utils/mongoose"; 
import { productRoutes } from "./routes/product.routes";

const server = Fastify({
  logger: true,
}).withTypeProvider<TypeBoxTypeProvider>();

// Route for test the server
server.get("/ping", async (request, reply) => {
  return "pong\n";
});

// Set up the routes
server.register(productRoutes, { url : '/api/products' })


// Start up the server
server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
