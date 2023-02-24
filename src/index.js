"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const AuthUser_schema_1 = require("./models/AuthUser.schema");
const server = (0, fastify_1.default)().withTypeProvider();
server.get("/ping", async (request, reply) => {
    return "pong\n";
});
server.post("/auth", {
    schema: {
        body: AuthUser_schema_1.AuthUser
    }
}, async (request, reply) => {
    const { username, password } = request.body;
    console.log(username + " " + password);
    return "logged in";
});
server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
