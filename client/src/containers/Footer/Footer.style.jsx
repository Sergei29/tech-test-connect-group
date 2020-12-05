import styled from "styled-components";
import { spacing } from "../../constants/styleVariables";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: ${spacing.footerHeight};
  small {
    font-size: 10px;
  }
`;
