import { FastifyRequest } from 'fastify';


export const attackerDetails = (req: FastifyRequest) => {
    return {
        body: req.body,
        headers: req.headers,
        params: req.params,
        query: req.query,
        hostname: req.hostname,
        ip: req.ip,
    };
};
