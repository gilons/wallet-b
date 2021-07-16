import { convertToCurrency, sumToCurrency, unusedCurrencies } from "./currency-service"

test("should convert currency correctly", () => {
    const convertedCurrency = convertToCurrency({amount: 100, currency: "euro"}, "us-dollar")
    expect(convertedCurrency).toEqual(124)
})

test("should sum up amount to a currency",()  => {
    const sumAmount = sumToCurrency([{amount: 100, currency: "euro"}], "us-dollar")
    expect(sumAmount).toEqual(124)
})

test("show correctly filter out used currency", () => {
    const unused = unusedCurrencies(["australian-dollar", "dinar"])
    expect(unused?.length).toEqual(22)
})