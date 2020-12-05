import styled from "styled-components";
import { Link } from "react-router-dom";
import { color, spacing, fonts } from "../../../constants/styleVariables";

export const CarListItemContainer = styled(Link)`
  display: grid;
  align-content: flex-start;
  text-decoration: none;
  color: ${color.font};
  font-family: ${fonts.lucida};

  .listItem__image_box {
    overflow: hidden;
    img {
      max-width: 100%;
    }
  }
  .listItem__car_name {
    span {
      display: block;
      border-top: 1px solid ${color.font};
      border-bottom: 1px solid ${color.font};
    }
    height: ${spacing.unit(4)};
    padding: ${spacing.unit(1)} ${spacing.unit(5)};
  }
  .listItem__car_price {
    margin-top: ${spacing.unit(1)};
    margin-bottom: ${spacing.unit(1)};
  }
  .listItem__car_summary {
    font-size: 0.8rem;
  }
  &:hover {
    opacity: 0.8;
    transition: all 0.3s ease-in-out;
  }
`;
