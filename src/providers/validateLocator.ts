import { ServerResponse } from 'http';
import { FastifyRequest, FastifyReply } from 'fastify';
import { logger } from '../services/logger';
import { isLocatorValid } from '../util';


export function pValidateLocator(req: FastifyRequest, res: FastifyReply<ServerResponse>) {

    if (!isLocatorValid(req.params.locator)) {
        logger.info(`invalid locator id in process id:${ process.pid }`);
        return res.status(404).send();
    }
}




