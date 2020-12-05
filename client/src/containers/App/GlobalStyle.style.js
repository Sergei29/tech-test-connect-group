import { createGlobalStyle } from "styled-components";
import { fonts } from "../../constants/styleVariables";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: ${fonts.lucida};
  font-size: 14px;
}
`;
