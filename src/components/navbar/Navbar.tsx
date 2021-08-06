import React, { useState } from "react";
import { Link } from "gatsby";
import { useMediaQuery, useDisclosure } from "@chakra-ui/react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Spacer,
  Circle,
} from "@chakra-ui/react";
import { NavItem, ContactNavItem } from "./Navbar.style";
import CustomDrawer from "../drawer/Drawer";
import logo from "../../images/logo.png";
import NavItems from "./NavItems.json";

const Navbar = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="100%" p={[4, 8]} position="absolute">
      <Container maxW="full">
        <Flex>
          <Box p="2">
            <Heading size="md" d="flex" alignItems="baseline">
              <Link to="/">
                <Image boxSize="50px" src={logo} alt="lOGO" />
              </Link>
              <Circle size="14px" bg="green.400"></Circle>
            </Heading>
          </Box>
          <Spacer />
          <Box>
            {isLargerThan1280 ? (
              <HStack spacing="16">
                {NavItems.map((item) => (
                  <NavItem key={item.id} to={item.link}>
                    {item.text}
                  </NavItem>
                ))}
                <ContactNavItem to="#contact">Contact Me</ContactNavItem>
              </HStack>
            ) : (
              <CustomDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
                {NavItems.map((item) => (
                  <NavItem key={item.id} to={item.link} onClick={onClose}>
                    {item.text}
                  </NavItem>
                ))}
                <ContactNavItem to="#contact" onClick={onClose}>Contact Me</ContactNavItem>
              </CustomDrawer>
            )}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
