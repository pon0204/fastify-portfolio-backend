import Fastify from "fastify";
import fastifyCors from "fastify-cors";
import fastifySwagger from "fastify-swagger";
import database from "./database/index.js";
import "./models/product.js";
import routes from "./plugin/routes.js";
const fastify = Fastify()


fastify.register(fastifyCors), { 
  origin: true,
  methods: ["GET","POST", "DELETE", "PUT", "PATCH"]
}
fastify.register(fastifySwagger, {
  routePrefix: '/docs',
  openapi: {},
  exposeRoute: true,
})

fastify.register(routes)


const start = async () => {
  try {
    await database.sync();
    await fastify.listen(3333);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();