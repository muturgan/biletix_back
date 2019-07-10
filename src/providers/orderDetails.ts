import { Request, Response } from 'express';
import { logger } from '../services/logger';
import { knex } from '../services/db-driver';
import { TOrderDetails } from '../customTypes';




export async function pGetOrderDetails(req: Request, res: Response) {
    try {

        const data = await knex
            .select('orders.ID', 'locator', 'name_first', 'name_second')
            .from('orders')
            .leftJoin('order_passengers', 'orders.ID', 'order_passengers.order_id')
            .where({locator: req.params.locator}) as Array<TOrderDetails>;

        if (!data.length) {
            return res.sendStatus(404);
        }

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
