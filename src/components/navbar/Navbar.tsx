import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useMediaQuery, useDisclosure } from "@chakra-ui/react";
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Spacer,
  Circle,
} from "@chakra-ui/react";
import { NavItem, ContactNavItem } from "./Navbar.style";
import CustomDrawer from "../drawer/Drawer";
import NavItems from "./NavItems.json";

const Navbar = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="100%" p={[4, 8]} position="absolute">
      <Container maxW="full">
        <Flex>
          <Box p="2">
            <Heading size="md" d="flex" alignItems="flex-end">
              <Link to="/">
                <StaticImage
                  src="../../images/logo.png"
                  alt="ArieldRioDev Logo"
                  placeholder="none"
                  width={60}
                  height={60}
                />
              </Link>
              <Circle size="14px" bg="green.400"></Circle>
            </Heading>
          </Box>
          <Spacer />
          <Box alignSelf="center">
            {isLargerThan1280 ? (
              <HStack spacing="16">
                {NavItems.map((item) => (
                  <NavItem key={item.id} to={item.link}>
                    {item.text}
                  </NavItem>
                ))}
                <NavItem to="/#contact">Contact Me</NavItem>
              </HStack>
            ) : (
              <CustomDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
                {NavItems.map((item) => (
                  <NavItem
                    key={item.id}
                    to={item.link}
                    onAnchorLinkClick={onClose}
                  >
                    {item.text}
                  </NavItem>
                ))}
                <ContactNavItem to="/#contact" onAnchorLinkClick={onClose}>
                  Contact Me
                </ContactNavItem>
              </CustomDrawer>
            )}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
