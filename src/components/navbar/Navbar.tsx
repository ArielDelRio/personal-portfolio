import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { NavItem } from "./Navbar.style";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <Box w="100%" p={4} bg="#000" position="absolute">
      <Container maxW="full" px={10}>
        <Flex>
          <Box p="2">
            <Heading size="md">
              <Image boxSize="50px" src={logo} alt="lOGO" />
            </Heading>
          </Box>
          <Spacer />
          <HStack spacing="24">
            <NavItem to="#">About Me</NavItem>
            <NavItem to="#">Skills</NavItem>
            <NavItem to="#">Portfolio</NavItem>
            <Button
              _hover={{ bg: "steal" }}
              px="6"
              bg="white"
              variant="solid"
              rounded="3xl"
              textTransform="uppercase"
            >
              Contact Me
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
