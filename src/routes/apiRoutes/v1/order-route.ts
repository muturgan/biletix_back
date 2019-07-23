import { FastifyInstance } from 'fastify';
import { pGetOrders, pGetOrderDetails } from '../../../providers';


export class OrderRoute {

    public routes(app: FastifyInstance): void {

        app.get('/v1/order', pGetOrders);

        app.get('/v1/order/:locator', pGetOrderDetails);
    }
}
