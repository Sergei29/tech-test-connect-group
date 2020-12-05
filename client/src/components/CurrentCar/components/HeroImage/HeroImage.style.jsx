import styled from "styled-components";
import { mediaQueryTo } from "../../../../constants/styleMixins";
import { spacing, color } from "../../../../constants/styleVariables";

export const HeroImageContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.imgUrl});
  height: 65vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  ${mediaQueryTo.md`
    height: 60vh;
    background-position: bottom;
  `}
  ${mediaQueryTo.sm`
    background-position: bottom;
  `}
  ${mediaQueryTo.xs`
    height: 40vh;
  `}
  .heroText {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${color.white};
    width: 80vw;
    h1 {
      font-size: 50px;
      margin-bottom: ${spacing.unit(3)};
      ${mediaQueryTo.sm`
        font-size: 34px;
      `};
      ${mediaQueryTo.xs`
        font-size: 30px;
      `};
    }
    .subText {
      font-size: 24px;
      ${mediaQueryTo.sm`
        font-size: 16px;
      `}
    }
  }
`;
