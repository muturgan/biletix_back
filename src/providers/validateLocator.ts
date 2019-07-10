import { Request, Response, NextFunction } from 'express';
import { logger } from '../services/logger';
import { isLocatorValid } from '../util';


export function pValidateLocator(req: Request, res: Response, next: NextFunction) {

    if (!isLocatorValid(req.params.locator)) {
        logger.info(`invalid locator id in process id:${ process.pid }`);
        return res.sendStatus(404);
    }

    return next();
}




