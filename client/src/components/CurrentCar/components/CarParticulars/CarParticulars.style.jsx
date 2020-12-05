import styled from "styled-components";
import { spacing } from "../../../../constants/styleVariables";

export const CarParticularsContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  text-align: left;
  .particularsItem {
    padding: ${spacing.unit(2)};
    display: grid;
    grid-template-columns: 250px 1fr;
  }
`;
