import "./models/product.js";
import database from "./database/index.js";
import Fastify from "fastify";
const fastify = Fastify()
import fastifyCors from "fastify-cors";
import routes from "./plugin/routes.js";

fastify.register(fastifyCors), { 
  origin: true,
  methods: ["GET","POST", "DELETE", "PUT", "PATCH"]
}
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