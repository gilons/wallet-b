import styled from "styled-components";
import { Locale, useLocales } from "../../locales";
import {
  ContainerShadow,
  H3,
  ItemsContent,
  DropdownItemsContentProps,
} from "../../themes";

const HeaderContent = styled.div`
  height: 40px;
  transition: all 0.5s 0.5s ease-in-out;
  padding: 7px;
  display: flex;
  align-items: center;
`;

const LanguagesContainer = styled(ContainerShadow)`
  border-radius: 5px;
  max-width: 300px;
  width: 100%;
  min-width: 0px;
  transition: all 0.5s 0.5s ease-in-out;
`;

export const Languages = (props: DropdownItemsContentProps<Locale>) => {
  const { t } = useLocales();
  return (
    <LanguagesContainer>
      <HeaderContent>
        <H3 fontWeight={"500"}>{t("translation.title")}</H3>
      </HeaderContent>
      <ItemsContent {...props} />
    </LanguagesContainer>
  );
};
