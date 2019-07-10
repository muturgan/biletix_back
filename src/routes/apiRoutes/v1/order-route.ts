import { Express } from 'express';
import {
    pValidateLocator,
    pGetOrders,
    pGetOrderDetails,
        } from '../../../providers';


export class OrderRoute {

    public routes(app: Express): void {

        app.route('/v1/order')
            .get(
                pGetOrders,
            );


        app.route('/v1/order/:locator')
            .get(
                pValidateLocator,
                pGetOrderDetails,
            );

    }
}
