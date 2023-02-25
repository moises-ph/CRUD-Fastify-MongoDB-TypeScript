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
server.get("/ping", async (request, reply) => {
    return "pong\n";
});
product_routes_1.routes.map((route, index) => {
    switch (route.method) {
        case 'GET':
            index == 0 ? server.get(route.url, route.handler) : server.get(route.url, { schema: route.schema }, route.handler);
            break;
        case 'POST':
            server.post(route.url, { schema: route.schema }, route.handler);
            break;
        case 'PUT':
            server.put(route.url, { schema: route.schema }, route.handler);
            break;
        case 'DELETE':
            server.delete(route.url, { schema: route.schema }, route.handler);
            break;
    }
});
server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
});
