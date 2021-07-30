import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Wrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	margin: ${(p) => `${p.theme.margins.small} ${p.theme.margins.large}`};
	z-index: 1;

	@media (${(p) => p.theme.breakpoints.mobile}) {
		margin: ${(p) => `${p.theme.margins.small} 10px`};
	}
`;

const MenuButton = styled.div`
	display: none;
	cursor: pointer;
	position: absolute;
	right: 10px;
	top: 10px;
	z-index: 100;
	font-size: ${(p) => p.theme.fontSizes.large};

	@media (${(p) => p.theme.breakpoints.large}) {
		display: inline-block;
	}

	& > .bar1,
	& > .bar2,
	& > .bar3 {
		width: 35px;
		height: 5px;
		background-color: ${(p) => p.theme.palette.common.white};
		margin: 6px 0;
		transition: 0.4s;
	}

	&.active {
		position: fixed;
		overflow: hidden;
		right: 60px;
		top: 30px;

		@media (${(p) => p.theme.breakpoints.mobile}) {
			right: 20px;
		}
	}

	&.active > .bar1 {
		-webkit-transform: rotate(-45deg) translate(-9px, 6px);
		transform: rotate(-45deg) translate(-9px, 6px);
	}

	&.active > .bar2 {
		opacity: 0;
	}

	&.active > .bar3 {
		-webkit-transform: rotate(45deg) translate(-8px, -8px);
		transform: rotate(45deg) translate(-8px, -8px);
	}
`;

const Menu = styled.div`
	display: flex;
	align-items: center;

	@media (${(p) => p.theme.breakpoints.large}) {
		flex-direction: column;
		justify-content: space-evenly;
		width: 100vw;
		height: 0;
		transition: height 500ms;

		position: fixed;
		overflow: hidden;
		top: 0;
		right: 0;
		background-color: ${(p) => p.theme.palette.common.black};

		&.active {
			height: 100vh;
			display: flex;
		}
	}
`;

const NavItemStyles = css`
	margin: 0 ${(p) => p.theme.margins.small};
	color: ${(p) => p.theme.palette.common.white};
	font-size: 1.1em;
	text-decoration: none;

	@media (${(p) => p.theme.breakpoints.mobile}) {
		margin: 0;
	}

	&.item:after {
		display: block;
		content: "";
		border-bottom: 2px solid ${(p) => p.theme.palette.common.white};
		transform: scaleX(0);
		transition: transform 250ms ease-in-out;
	}
	&.item:hover:after {
		transform: scaleX(1);
	}
`;

const NavItem = styled(NavLink)`
	${NavItemStyles}
`;

const NavItemHash = styled(HashLink)`
	${NavItemStyles}
`;

const ImportantNavLink = styled(HashLink)`
	${NavItemStyles}
	border: 2px solid ${(p) => p.theme.palette.secondary.main};
	border-radius: ${(p) => p.theme.borderRadius.large};
	padding: 11px 22px;

	transition: color 250ms ease-in-out, border 250ms ease-in-out, background-color 250ms ease-in-out;
	&:hover {
		background-color: ${(p) => p.theme.palette.secondary.main};
		border: 2px solid ${(p) => p.theme.palette.common.white};
	}
`;

export { Wrapper, MenuButton, Menu, NavItem, NavItemHash, ImportantNavLink };
