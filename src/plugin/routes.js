import Product from "../models/product.js";
import routesRoom from "./routesRoom.js";

export default async function(fastify,opts){
  fastify.register(routesRoom);
}
