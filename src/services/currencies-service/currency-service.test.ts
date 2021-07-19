import { convertToCurrency, sumToCurrency, unusedCurrencies } from "./currency-service"
import { CurrencyTypes } from "./currency-service.types"

test("should convert currency correctly", () => {
    const convertedCurrency = convertToCurrency({amount: 100, currency: CurrencyTypes.EUR}, CurrencyTypes.USD)
    expect(convertedCurrency).toEqual(124)
})

test("should sum up amount to a currency",()  => {
    const sumAmount = sumToCurrency([{amount: 100, currency: CurrencyTypes.EUR}], CurrencyTypes.USD)
    expect(sumAmount).toEqual(124)
})

test("show correctly filter out used currency", () => {
    const unused = unusedCurrencies([CurrencyTypes.AUSTRALIAN_DOLLAR, CurrencyTypes.DINAR])
    expect(unused?.length).toEqual(22)
})