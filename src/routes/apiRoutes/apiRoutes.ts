import fastify = require('fastify');
import { OrderRoute } from './v1/order-route';


export const apiRoutes = fastify();


new OrderRoute().routes(apiRoutes);
