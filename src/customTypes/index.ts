export type sqlEditRequestType = {
    readonly fieldCount: number,
    readonly affectedRows: number,
    readonly insertId: number,
    readonly serverStatus: number,
    readonly warningCount: number,
    readonly message: string,
    readonly protocol41: boolean,
    readonly changedRows: number,
};

export type knexSelectInfoType = {
    catalog: string,
    db: string,
    table: string,
    orgTable: string,
    name: string,
    orgName: string,
    charsetNr: number,
    length: number,
    type: number,
    flags: number,
    decimals: number,
    zeroFill: boolean,
    protocol41: boolean,
};

export type knexRawSelectResponseType<T> = [T[], knexSelectInfoType[]];

export type knexRawUpdateResponseType = [sqlEditRequestType, any|null];




export type TCurrencyItem = {
    attributes: {
        'diffgr:id': string;  // 'ValuteCursOnDate26',
        'msdata:rowOrder': string;  // '25',
    };
    Vname: string; // 'Венгерский форинт',
    Vnom: string;  // '100',
    Vcurs: string; // '22.2052',
    Vcode: string; // '348',
    VchCode: string; // 'HUF'
};

export type TCbrRes = {
    GetCursOnDateResult: {
        schema: {
            attributes: {
                id: string;
            };
            element: {
                attributes: {
                    name: string; // 'ValuteData',
                    'msdata:IsDataSet': string; // 'true',
                    'msdata:UseCurrentLocale': string; // 'true',
                    'msprop:OnDate': string; // '20171230'
                };
                complexType: {
                    choice: {
                        attributes: {
                            minOccurs: string; // '0',
                            maxOccurs: string; // 'unbounded'
                        };
                        element: any;
                    };
                };
            };
        };
        diffgram: {
            ValuteData: {
                ValuteCursOnDate: Array<TCurrencyItem>;
            }
        };
    };
};


export type TOrderTable = {
    ID: number;
    locator: string;
    email: string;
    phone: string;
    price: number;
    currency: string;
    date_insert: string;
};

export type TPassengersTable = {
    ID: number;
    order_id: number;
    name_first: string;
    name_second: string;
    date_insert: string;
};

export type TOrderUnpreparedData = {
    ID: number;
    locator: string;
    date_insert: string;
    price: number;
    currency: string;
    passengersCount: number;
};


export type TOrderData = {
    ID: number;
    locator: string;
    date_insert: string;
    priceRub: number;
    priceCur: number;
    currency: string;
    passengersCount: number;
};

export type TOrderDetails = {
    order_id: number;
    name_first: string;
    name_second: string;
    locator: string;
};
