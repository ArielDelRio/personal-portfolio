import React, { useEffect, useState } from "react";
import LogoImg from "../../assets/Logo.png";
import Logo from "../logo/Logo.styles";
import { Wrapper, Menu, MenuButton, NavItem, NavItemHash, ImportantNavLink } from "./Navbar.styles";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		document.addEventListener("keydown", handlePressEsc, false);
		return () => {
			document.removeEventListener("keydown", handlePressEsc, false);
		};
	}, []);

	const handlePressEsc = (event: KeyboardEvent) => {
		if (event.code === "Escape") {
			setOpen(false);
		}
	};

	return (
		<Wrapper>
			<NavItem to="/">
				<Logo src={LogoImg} alt="" />
			</NavItem>
			<MenuButton className={open ? "active" : ""} onClick={() => setOpen(!open)}>
				<div className="bar1" />
				<div className="bar2" />
				<div className="bar3" />
			</MenuButton>
			<Menu className={open ? "active" : ""}>
				<NavItem className="item" to="/" onClick={() => setOpen(false)}>
					Casas en Venta
				</NavItem>
				<NavItem className="item" to="#" onClick={() => setOpen(false)}>
					Compro casa
				</NavItem>
				<NavItem className="item" to="/#" onClick={() => setOpen(false)}>
					Sobre Nosotros
				</NavItem>
				<NavItemHash className="item" to="/#FAQ" smooth onClick={() => setOpen(false)}>
					Preguntas Frecuentes
				</NavItemHash>
				<ImportantNavLink to="/#contact" smooth onClick={() => setOpen(false)}>
					Contáctenos
				</ImportantNavLink>
			</Menu>
		</Wrapper>
	);
};

export default Navbar;
