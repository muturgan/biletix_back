import soap = require('soap');
import { logger } from '../services/logger';
import { TCurrencyItem, TCbrRes } from '../customTypes';
import { env } from '../configs/enviroment';



class Soaper {

    private static _client: soap.Client | undefined;
    private static _url = env.SOAP_URL;

    constructor() {
        soap.createClientAsync(Soaper._url)
            .then(client => Soaper._client = client)
            .catch(err => {
                logger.error('soap client creation error', err);
                process.exit(1);
            });
    }

    private _getCursOnDateAsync(On_date: string): Promise<Array<TCurrencyItem>> {
        return new Promise((resolve, reject) => {

            while (!Soaper._client) {
                setTimeout(() => {}, 0);
            }

            Soaper._client.GetCursOnDate({On_date}, (error: any, res: TCbrRes) => {

                if (error) {
                    return reject(error);
                }

                return resolve(res.GetCursOnDateResult.diffgram.ValuteData.ValuteCursOnDate);
            });
        });
    }

    public async getCurrentExchangeRate(On_date: string, currencyCode: string): Promise<number> {

        const data = await this._getCursOnDateAsync(On_date);

        const index = data.findIndex(item => item.VchCode === currencyCode);

        if (index === -1) {
            throw(new Error('incorrect currencyCode'));
        }

        return Number(data[index].Vcurs);
    }
}


const soaper = new Soaper;
export default soaper;
