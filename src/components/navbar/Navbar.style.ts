import styled, { css } from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";


const NavItem = styled(AnchorLink)`
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

const ContactNavItem = styled(AnchorLink)`
  cursor: pointer;
  color: #000;
  font-size: 1rem;
  text-decoration: none;
  background-color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  text-transform: uppercase;
  font-weight: bold;

  transition: background-color 300ms;
  &:hover {
    background-color: #E5E5E5;
  }

`;

export { NavItem, ContactNavItem };
