"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
require("./utils/mongoose");
const product_routes_1 = require("./routes/product.routes");
const server = (0, fastify_1.default)({
    logger: true,
}).withTypeProvider();
// Route for test the server
server.get("/ping", async (request, reply) => {
    return "pong\n";
});
// Set up the routes
server.register(product_routes_1.productRoutes, { url: '/api/products' });
// Start up the server
server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
});
