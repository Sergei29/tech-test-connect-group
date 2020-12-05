import styled from "styled-components";
import { mediaQueryTo } from "../../constants/styleMixins";

export const CarListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 1px;
  ${mediaQueryTo.md`
    grid-template-columns: auto auto;
  `}
  ${mediaQueryTo.xs`
    grid-template-columns: auto;
  `}
`;
