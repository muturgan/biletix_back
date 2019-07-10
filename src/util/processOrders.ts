import { TOrderUnpreparedData, TOrderData } from '../customTypes';
import { formatDate } from './formatDate';
import soaper from '../services/soaper';
import BigNumber from 'bignumber.js';


export const processOrders = async (unpreparedData: TOrderUnpreparedData): Promise<TOrderData> => {
    let rate: number|undefined;
    const formatedDate = formatDate(unpreparedData.date_insert);

    if (unpreparedData.currency !== 'RUB') {
        rate = await soaper.getCurrentExchangeRate(formatedDate, unpreparedData.currency);
    }

    return {
        ID: unpreparedData.ID,
        locator: unpreparedData.locator,
        date_insert: formatedDate,
        priceRub: rate
            ? new BigNumber(unpreparedData.price).multipliedBy(rate).toNumber()
            : unpreparedData.price,
        priceCur: unpreparedData.price,
        currency: unpreparedData.currency,
        passengersCount: unpreparedData.passengersCount,
    };
};
