import { useMemo } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import styled from "styled-components";
import { Locale, useLocales } from "../../locales";
import { Container, Option as OptionType, shadow } from "../../themes";
import { ModalState, useModal } from "../../utils";
import { TranslationIcon } from "../../svg-icons";
import { EnglishIcon, FranceIcon, ChinaIcon } from "../../svg-icons";
import { Languages } from "./languages";

const TranslatorContainer = styled(Container)`
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  justify-content: center;
  border-radius: 30px;
  width: 25px;
  height: 25px;
  background-color: ${(props) => props.theme.primary};
  box-shadow: ${shadow};
  border-color: ${(props) => props.theme.accent};
`;

const TransIconContainer = styled.div`
  &:hover {
    transform: scale(1.3);
    transition: transform 0.5s ease-in-out;
  }
`;

const languageIcons: { [key in Locale]: React.ComponentType<any> } = {
  en: EnglishIcon,
  fr: FranceIcon,
  chin: ChinaIcon,
};

type LanguageTextType = { [key in Locale]: string };
const languageText: LanguageTextType = {
  en: "English",
  fr: "Français",
  chin: "中国人",
};


export const Translator = () => {

  const { setLocale, locale } = useLocales();

  const languages = useMemo<Array<OptionType<Locale>>>(() => {
    const keys = Object.keys(languageText) as Array<Locale>;
    return keys.map((element) => ({
      value: element,
      Icon: languageIcons[element],
      selected: element === locale,
      text: languageText[element],
    }));
  }, [locale]);

  const handleLanguageChange = useCallback(
    (item: OptionType<Locale>) => {
      setLocale(item.value);
    },
    [setLocale]
  );

  const [, setModalState] = useModal();
  
  const ModalContent = useMemo(
    () => (
      <Languages
        options={languages}
        onClick={handleLanguageChange}
        toggleOptions={() => {}}
      />
    ),
    [languages, handleLanguageChange]
  );

  // streaming updates(new modal content) to the modal as the
  // language changes since since the modal content is
  // generic and has no way to know when the language changes
  useEffect(() => {
    setModalState({ key: locale, Component: ModalContent });

    // considering this warning(that is adding all the required deps to the deps
    // array of this useEffect) will cause in rerendering infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  const showLanguages = useCallback(() => {
    const newState: ModalState = {
      shown: true,
      maxWidth: 500,
      maxHeight: 300,
      Component: ModalContent,
    };
    setModalState(newState);
  }, [ModalContent, setModalState]);

  return (
    <TranslatorContainer onClick={showLanguages}>
      <TransIconContainer>
        <TranslationIcon />
      </TransIconContainer>
    </TranslatorContainer>
  );
};
