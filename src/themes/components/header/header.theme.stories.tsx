import styled from "styled-components";
import { WithTheme } from "../../../providers";
import { Header } from "./header.theme";

const HeaderStory = {
  component: Header,
  title: "Themes/Header",
};

const HeaderContent = styled.div`
    height: 50px
`
export default HeaderStory;
export const Default = () => {
  return (
    <WithTheme>
      <Header>
        <HeaderContent></HeaderContent>
      </Header>
    </WithTheme>
  );
};
