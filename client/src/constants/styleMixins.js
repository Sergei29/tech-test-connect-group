import { css } from "styled-components";
import { styleBreakpoints } from "./styleBreakpoints";

export const mediaQueryTo = Object.keys(styleBreakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (max-width: ${styleBreakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);
