import Room from "../models/room.js";

export default async function(fastify,opts){
  fastify.get('/room',async(request,reply) => {
    const room = await Room.findAll();
    return reply.send({ room });
  })

  fastify.get('/room/:id',async(request,reply) => {
    const { id } = request.params;
    const room = await Room.findByPk(id);
    return reply.send({ room });
  })

  fastify.post('/room',async(request,reply) => {
    const room = await Room.create({ ...request.body });
    const roomId = room.uuid
    return reply.send({ roomId });
  })
}