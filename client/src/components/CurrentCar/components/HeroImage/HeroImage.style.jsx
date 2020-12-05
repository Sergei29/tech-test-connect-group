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
  .hero-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${color.white};
    h1 {
      font-size: 50px;
      margin-bottom: ${spacing.unit(4)};
      ${mediaQueryTo.sm`
        font-size: 34px;
      `};
    }
    button {
      border: none;
      outline: 0;
      display: inline-block;
      padding: ${spacing.unit(1)} ${spacing.unit(3)};
      color: ${color.black};
      background-color: ${color.greyLight};
      text-align: center;
      cursor: pointer;
      &:hover {
        background-color: ${color.greyDark};
        color: ${color.white};
      }
    }
  }
`;
