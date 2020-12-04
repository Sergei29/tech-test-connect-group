import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  padding: 1rem;
  a {
    text-decoration: none;
    display: inline-block;
    margin-right: 1rem;
  }

  .active {
    color: orange;
  }
`;
