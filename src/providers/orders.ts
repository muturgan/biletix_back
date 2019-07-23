import { ServerResponse } from 'http';
import { FastifyRequest, FastifyReply } from 'fastify';
import { logger } from '../services/logger';
import { knex } from '../services/db-driver';
import { TOrderUnpreparedData, knexRawSelectResponseType } from '../customTypes';
import { processOrders } from '../util';




export async function pGetOrders(req: FastifyRequest, res: FastifyReply<ServerResponse>) {
    try {

        const result = await knex.raw(`
            SELECT orders.ID, locator, orders.date_insert, price, currency, COUNT(order_id) AS passengersCount
            FROM orders LEFT JOIN order_passengers
            ON orders.ID = order_passengers.order_id GROUP BY orders.ID;
        `) as knexRawSelectResponseType<TOrderUnpreparedData>;

        const data = await Promise.all(
            result[0].map(item => processOrders(item))
        );

        return res.status(200).send({
            success: true,
            code: 200,
            data,
        });

    } catch (error) {
        logger.error(`error on orders fetching in process id:${ process.pid }`, error);
        return res.status(500).send({
            success: false,
            code: 500,
            message: 'Внутренняя ошибка сервера',
            error,
        });
    }
}
