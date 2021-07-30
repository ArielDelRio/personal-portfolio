import styled, { css } from "styled-components";
import { Link } from "gatsby";

const NavItem = styled(Link)`
  cursor: pointer;
  color: #fff;
  font-size: 1.1em;
  text-decoration: none;
  &:after {
    display: block;
    content: "";
    border-bottom: 2px solid #fff;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;

export { NavItem };
