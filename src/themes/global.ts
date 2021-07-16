import { createGlobalStyle } from "styled-components";

// ensuring that there's no margin nor padding in the whole application except in places specified
export default createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Open Sans', sans-serif; 
   }
   #root{
       margin:0 auto;
   }
`;
