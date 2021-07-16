import {
  AustralianDollarIcon,
  DongIcon,
  CanadianDollarIcon,
  DinarIcon,
  DollarIcon,
  EuroIcon,
  SwissFrancIcon,
  KroneIcon,
  MoroccanDirhamIcon,
  NairaIcon,
  PesoIcon,
  RealIcon,
  CurrencyIconProps,
  RiyalIcon,
  RubleIcon,
  RupeeIcon,
  ShekelIcon,
  SouthAfricanRandIcon,
  SterlingIcon,
  TakaIcon,
  TurkishLiraIcon,
  WongIcon,
  YenIcon,
  ZlotyIcon,
  RenminbiIcon,
} from "../../svg-icons";
export enum CurrencyTypes {
  USD = "us-dollar",
  EUR = "euro",
  AUSTRALIAN_DOLLAR = "australian-dollar",
  SWISS_FRANC = "swiss-franc",
  CANADIAN_DOLLAR = "canadian-dollar",
  DINAR = "dinar",
  DONG = "dong",
  KRONE = "krone",
  MOROCCAN_DIRHAM = "moroccan-dirham",
  NAIRA = "naira",
  PESO = "peso",
  REAL = "real",
  RIYA = "riyal",
  RUBLE = "ruble",
  SHEKEL = "shekel",
  SOUTH_AFRICA_RAND = "south-africa-rand",
  STERLING = "sterling",
  TAKA = "taka",
  TURKISH_LIRA = "turkish-lira",
  WON = "wong",
  YEN = "yen",
  ZLOTY = "zloty",
  RUPEE = "rupee",
  RENMINBI = "renminbi"
}
export type Currency = `${CurrencyTypes}`;
export interface CurrencyItem {
  name: Currency;
  title: string;
  dollarFactor: number;
  code: string;
  Icon: React.ComponentType<CurrencyIconProps>;
}
export const currenciesMap = Object.freeze<
  { [key in Currency]: CurrencyItem }
>({
  [CurrencyTypes.USD]: {
    name: CurrencyTypes.USD,
    dollarFactor: 1,
    code: "USD",
    title: "currencies.usDollar",
    Icon: DollarIcon,
  },
  [CurrencyTypes.EUR]: {
    name: CurrencyTypes.EUR,
    dollarFactor: 1.24,
    code: "EUR",
    title: "currencies.euro",
    Icon: EuroIcon,
  },
  [CurrencyTypes.SWISS_FRANC]: {
    name: CurrencyTypes.SWISS_FRANC,
    dollarFactor: 0.9965,
    code: "CHF",
    title: "currencies.swissFranc",
    Icon: SwissFrancIcon,
  },
  [CurrencyTypes.AUSTRALIAN_DOLLAR]: {
    name: CurrencyTypes.AUSTRALIAN_DOLLAR,
    dollarFactor: 0.75,
    code: "AUD",
    title: "currencies.australianDollar",
    Icon: AustralianDollarIcon,
  },
  [CurrencyTypes.CANADIAN_DOLLAR]: {
    name: CurrencyTypes.CANADIAN_DOLLAR,
    dollarFactor: 0.8,
    code: "CAD",
    title: "currencies.canadianDollar",
    Icon: CanadianDollarIcon,
  },
  [CurrencyTypes.DINAR]: {
    name: CurrencyTypes.DINAR,
    dollarFactor: 0.00068,
    code: "IQD",
    title: "currencies.dinar",
    Icon: DinarIcon,
  },
  [CurrencyTypes.DONG]: {
    name: CurrencyTypes.DONG,
    code: "VND",
    dollarFactor: 0.000043,
    title: "currencies.vietnamDong",
    Icon: DongIcon,
  },
  [CurrencyTypes.KRONE]: {
    name: CurrencyTypes.KRONE,
    dollarFactor: 0.11,
    code: "NOK",
    title: "currencies.norwegianKrone",
    Icon: KroneIcon,
  },
  [CurrencyTypes.MOROCCAN_DIRHAM]: {
    name: CurrencyTypes.MOROCCAN_DIRHAM,
    dollarFactor: 0.27,
    code: "MAD",
    title: "currencies.moroccanDirham",
    Icon: MoroccanDirhamIcon,
  },
  [CurrencyTypes.NAIRA]: {
    name: CurrencyTypes.NAIRA,
    dollarFactor: 0.0024,
    code: "NGN",
    title: "currencies.nigerianNaira",
    Icon: NairaIcon,
  },
  [CurrencyTypes.PESO]: {
    name: CurrencyTypes.PESO,
    code: "MXN",
    dollarFactor: 0.05,
    title: "currencies.peso",
    Icon: PesoIcon,
  },
  [CurrencyTypes.REAL]: {
    name: CurrencyTypes.REAL,
    code: "BRL",
    dollarFactor: 0.19,
    title: "currencies.real",
    Icon: RealIcon,
  },
  [CurrencyTypes.RIYA]: {
    name: CurrencyTypes.RIYA,
    code: "SAR",
    dollarFactor: 0.27,
    title: "currencies.riyal",
    Icon: RiyalIcon,
  },
  [CurrencyTypes.RUBLE]: {
    name: CurrencyTypes.RUBLE,
    dollarFactor: 0.013,
    code: "RUB",
    title: "currencies.russianRuble",
    Icon: RubleIcon,
  },
  [CurrencyTypes.RUPEE]: {
    name: CurrencyTypes.RUPEE,
    dollarFactor: 0.013,
    code: "INR",
    title: "currencies.indianRupee",
    Icon: RupeeIcon,
  },
  [CurrencyTypes.SHEKEL]: {
    name: CurrencyTypes.SHEKEL,
    code: "ILS",
    dollarFactor: 0.3,
    title: "currencies.israelShekel",
    Icon: ShekelIcon,
  },
  [CurrencyTypes.SOUTH_AFRICA_RAND]: {
    name: CurrencyTypes.SOUTH_AFRICA_RAND,
    code: "ZAR",
    dollarFactor: 0.068,
    title: "currencies.southAfricaRand",
    Icon: SouthAfricanRandIcon,
  },
  [CurrencyTypes.STERLING]: {
    name: CurrencyTypes.STERLING,
    code: "GBP",
    dollarFactor: 1.38,
    title: "currencies.ukPound",
    Icon: SterlingIcon,
  },
  [CurrencyTypes.TAKA]: {
    name: CurrencyTypes.TAKA,
    code: "BDT",
    dollarFactor: 0.012,
    title: "currencies.bangladeshTaka",
    Icon: TakaIcon,
  },
  [CurrencyTypes.TURKISH_LIRA]: {
    name: CurrencyTypes.TURKISH_LIRA,
    code: "TRY",
    dollarFactor: 0.12,
    title: "currencies.turkishLira",
    Icon: TurkishLiraIcon,
  },
  [CurrencyTypes.WON]: {
    name: CurrencyTypes.WON,
    code: "KRW",
    dollarFactor: 0.00087,
    title: "currencies.koreanWong",
    Icon: WongIcon,
  },
  [CurrencyTypes.YEN]: {
    name: CurrencyTypes.YEN,
    code: "JPY",
    dollarFactor: 0.0091,
    title: "currencies.japaneseYen",
    Icon: YenIcon,
  },
  [CurrencyTypes.ZLOTY]: {
    name: CurrencyTypes.ZLOTY,
    code: "PLN",
    dollarFactor: 0.26,
    title: "currencies.polishZloty",
    Icon: ZlotyIcon,
  },
  [CurrencyTypes.RENMINBI]: {
    name: CurrencyTypes.RENMINBI,
    code: "CNY",
    dollarFactor: 0.15,
    title: "currencies.chinaRenminbi",
    Icon: RenminbiIcon,
  },
});

export interface CurrencyAmount {
  currency: Currency;
  amount: number;
}
export type CurrencyAmounts = Array<CurrencyAmount>;
