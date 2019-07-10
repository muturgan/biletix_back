import express = require('express');
import { OrderRoute } from './v1/order-route';


export const apiRoutes = express();


new OrderRoute().routes(apiRoutes);
