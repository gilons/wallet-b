import i18next from "i18next";
import en from "./lang/en.json";
import fr from "./lang/fr.json";
import chin from "./lang/chin.json";
import {
  I18nextProvider,
  initReactI18next,
  useTranslation,
  withTranslation,
} from "react-i18next";
import { Locale, Locales, WithLocalePropsType } from "./locales.types";
import { useLocalStorage } from "../utils";
import { useEffect } from "react";

i18next.use(initReactI18next);
i18next.init({
  interpolation: { escapeValue: false },
  fallbackLng: Locales.EN,
  debug: true,
  lng: Locales.EN,
  resources: {
    // -> common -> custom namespace
    en: { common: en },
    fr: { common: fr },
    chin: { common: chin },
  },
});

export const currentLocale = () => i18next.language as Locale;

export const useLocales = () => {
  const locales = useTranslation("common");
  const [locale, setLocale] = useLocalStorage<Locale>(
    "wb-locale",
    currentLocale()
  );

  useEffect(() => {
    changeLocale(locale);
  }, [locale]);
  return { ...locales, locale, setLocale };
};

export const changeLocale = (locale: Locale) => {
  i18next.changeLanguage(locale);
};

export const localesLanguages = () => i18next.languages;

export const withLocales = (component: React.ComponentType) => {
  return withTranslation("common")(component);
};


export const WithLocaleProvider = (props: WithLocalePropsType) => {
  return <I18nextProvider i18n={i18next}>{props.children}</I18nextProvider>;
};
