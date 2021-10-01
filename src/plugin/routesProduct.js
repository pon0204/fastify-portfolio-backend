import Product from "../models/product.js";

export default async function(fastify,opts){
  
  fastify.get("/product", async (request, reply) => {
    const post = await Product.findAll();
    return reply.send({ post });
    // return 'こんにちは'
  });
  
  fastify.post("/product", async (request, reply) => {
    const post = await Product.create({ ...request.body });
    return reply.send({ post });
  });
  
  fastify.get("/product/:id", async (request, reply) => {
    const { id } = request.params;
    const post = await Product.findByPk(id);
    return reply.send({ post });
  });
  
  fastify.put("/product/:id", async (request, reply) => {
    const { id } = request.params;
    await Product.update({ ...request.body }, { where: { id } });
    const post = await Product.findByPk(id);
    return reply.send({ post });
  });
  
  fastify.delete("/product/:id", async (request, reply) => {
    const { id } = request.params;
    const post = await Product.findByPk(id);
    await Product.destroy({ where: { id } });
    return reply.send({ post });
  }); 
}

