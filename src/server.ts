import fastify from "fastify";
import cors from "cors";
import dotenv from "dotenv";

const app = fastify({ logger: true});
dotenv.config();

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message })
});
