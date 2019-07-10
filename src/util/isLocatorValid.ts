const locatorRegexp = /[a-z]{6}/;

export const isLocatorValid = (locator: string): boolean => {
    return locatorRegexp.test(locator);
};
