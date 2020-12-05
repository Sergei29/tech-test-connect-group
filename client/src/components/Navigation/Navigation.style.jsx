import styled from "styled-components";
import { color, spacing } from "../../constants/styleVariables";

export const NavContainer = styled.nav`
  display: flex;
  padding: 1rem;
  a {
    text-decoration: none;
    display: inline-block;
    margin-right: ${spacing.unit(0.25)};
  }

  .active {
    color: ${color.activeNavLink};
    text-decoration: underline;
  }
`;
